import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

const app = express();
dotenv.config();
app.use(bodyParser.json());
app.use(cors({ //not responding to localhost:3000 with just app.use(cors). and enter the port where you want to send the response
    origin: ['http://localhost:3000'],
    credentials: true
}));
app.use(express.json());

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log('connected to mongoDB');
    } catch(err){
        throw err;
    }
}

mongoose.connection.on("disconnected", ()=>{
    console.log('mongoDB is disconnected');
})

app.post('/signin', async (req, res) => {
   try{
    const user = await User.findOne({
        email: req.body.email
    })
    if(!user){
        res.status(411).json('error signing in');
    }
    else{
        if(user.password===req.body.password){
            res.json('success');
        }
        else{
            res.status(411).json('error signing in');
        }
    }
   }catch(err){
    res.status(500).json(err);
   } 
})

app.post('/register', async (req,res) => {
   const newUser = new User(req.body);
    try{
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
   }
   catch(err){
    res.status(500).json(err);
   }
})

app.listen(1234, () => { //can put the port number in constants or .env
    connect();
    console.log('app is listening at port 1234');
})