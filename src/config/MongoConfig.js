const mongoose = require('mongoose');
const config = require('./config');

const mongoConnect = () => {
    mongoose.connect(config.mongodb_uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        //useCreateIndex: true,
    })
    .then((db) => {
        console.log('DB is connected');
    })
    .catch((err) => {
        console.log('error de connected');
        console.log(err);
    });
};

module.exports = { mongoConnect };