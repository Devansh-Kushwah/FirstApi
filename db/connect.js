const mongoose = require('mongoose');

const connectDB = (uri) => {
    console.log("Yes I am in database");
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;