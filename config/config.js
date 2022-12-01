const dotenv = require('dotenv');
dotenv.config();

const config = {
    db: {
        mongodb_url: process.env.MONGODB_URL,
        mongodb_db: process.env.MONGODB_DB,
    },
    port: process.env.PORT,
};

module.exports = {
    config,
};