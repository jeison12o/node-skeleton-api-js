const mongoose = require('mongoose');
const config = require('./Config');

mongoose.connect(config.mongodb_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useCreateIndex: true,
})
.then((db) => {
    console.log('DB is connected');
})
.catch((err) => {
    console.log(err);
});