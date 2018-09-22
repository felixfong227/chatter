const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Chatroom = require('./Schema/Chatroom');

mongoose.connect('mongodb://mongodb/chatter', error => {
    if(error){
        console.log("Can't not connect to MongoDB");
        throw new Error(error);
    }else{
        console.log('MongoDB is connected');
    }
});

app.use(bodyParser.json());

app.listen(80, () => {
    console.log('App is running 80');
});
 
app.get('/', (req, res) => {
    res.json({
        message: 'Thank for using Chatter, this is the backend API, for more information please check our the documentation',
    });
});

app.get('/chatrooms', async (req, res) => {
    // Find all public chatrooms
    const allPublicChatrooms = await Chatroom.find({
        isPublic: true,
    }, {
        isPublic: 1,
        name: 1,
        id: 1,
        create_date: 1,
        _id: 0,
    });
    res.json(allPublicChatrooms);
});

app.post('/chatrooms/create', async (req, res) => {
    const _roomObject = {};
    if(!req.body.name){
        const sillyname = require('sillyname');
        _roomObject.name = sillyname();
    }else{
        _roomObject.name = req.body.name;
    }
    _roomObject.id = require('crypto').randomBytes(20).toString('hex');
    _roomObject.create_date = new Date();
    _roomObject.isPublic = true;
    await Chatroom.create(_roomObject);
    res.json(_roomObject);
});
