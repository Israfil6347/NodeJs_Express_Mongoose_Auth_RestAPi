require("dotenv").config()

const dev ={
    app: {
        port: process.env.PORT||4002
    },
    db:{
        url: process.env.db_url
    }
}

module.exports = dev;