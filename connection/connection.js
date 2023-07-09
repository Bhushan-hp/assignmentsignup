const mongoose = require('mongoose');


connection = mongoose.connect('mongodb://localhost:27017/UserDB', {
        useNewUrlParser: true
    })
    .then(() => {
        console.log("DB Connected");
    })
    .catch(err => {
        console.log("connection to db Failed", err)
    })

module.exports = connection;