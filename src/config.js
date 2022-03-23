const dotenv = require('dotenv');

const config = () => {
    dotenv.config()
    return {
        port: process.env.APP_PORT || 3000,
        host: process.env.APP_HOST || 'localhost',
        dbHost: process.env.DB_HOST || 'localhost',
        dbPort: process.env.DB_PORT || 8080,
        dbUser: process.env.DB_USER || 'root',
        dbPassword: process.env.DB_PASSWORD || 'P@ssw0rd',
        dbName: process.env.DB_NAME || 'database'
    }
}

module.exports = config
