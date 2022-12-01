const mongoose = require('mongoose');
const config = require('../config/config');

mongoose.connect('mongodb://localhost:27017/kepegawaian', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    // we're connected!
    console.log('Database Connected');
});
