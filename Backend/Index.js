const express = require('express');
const moongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./Models/User');

const app = express();

app.use(cors());
app.use(express.json());

moongoose.connect('mongodb://127.0.0.1:27017/CRUD')


app.post('/create', (req,res) => {
    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err));
})

app.listen(3000,() =>{
    console.log("Server is running on port 3000");
})