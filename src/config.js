const dotenv = require('dotenv');

const config = () => {
    dotenv.config()
    return {
        port: process.env.APP_PORT || 3000,
        host: process.env.APP_HOST || 'localhost'
    }
}

module.exports = config
