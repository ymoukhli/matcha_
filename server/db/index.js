const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/matcha', { useNewUrlParser: true, useUnifiedTopology: true })
    .catch(e => console.log(`couldn't connect to database: ${e.message}`));

const db = mongoose.connection;

module.exports = db;