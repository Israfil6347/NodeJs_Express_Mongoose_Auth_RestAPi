
const mongoose = require('mongoose');

const refreshTokenSchema = new mongoose.Schema({
   
    refreshToken: {
        type: String
       
    },
    userId: {
        type: String
       
    },
    
});

const refreshToken = mongoose.model('RefreshToken', refreshTokenSchema);

module.exports = refreshToken;