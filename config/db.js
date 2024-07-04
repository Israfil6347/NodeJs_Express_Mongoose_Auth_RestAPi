const mongoose = require('mongoose');
const config = require('./config');



const dbURL = process.env.db_url;

mongoose.connect(dbURL).then(() => {
}).catch(err => {
  process.exit(1); 
});