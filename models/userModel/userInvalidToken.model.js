
const mongoose = require('mongoose');

const userInvalidTokenSchema = new mongoose.Schema({
   AccessToken: {
        type: String
       
    },
    userId: {
        type: String
       
    },
    
    
    
});

const invalidToken = mongoose.model('invalidToken', userInvalidTokenSchema);

module.exports = invalidToken;