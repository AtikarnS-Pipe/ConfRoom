const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    Name: string,
    Email: string,
    Age: number
})

const userModel = mongoose.model('users', userSchema);
model.exports = userModel;