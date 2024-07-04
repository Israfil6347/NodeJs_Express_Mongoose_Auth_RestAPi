
const mongoose = require('mongoose');

const authUserSchema = new mongoose.Schema({
    id:{
        type:String,
        require:true,
    },
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    roleName: {
        type: String,
        required: false
    },
});

const User = mongoose.model('User', authUserSchema);

module.exports = User;