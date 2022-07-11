const dotenv = require('dotenv');

const Config = () => {
    dotenv.config()
    return {
        name: process.env.APP_NAME || 'Application',
        port: process.env.APP_PORT || 3000,
        host: process.env.APP_HOST || 'localhost',
        dbHost: process.env.DB_HOST || 'localhost',
        dbPort: process.env.DB_PORT || 8080,
        dbUser: process.env.DB_USER || 'root',
        dbPassword: process.env.DB_PASSWORD || 'P@ssw0rd',
        dbName: process.env.DB_NAME || 'database',
        logLevel: process.env.LOG_LEVEL || 'debug'
    }
}

module.exports = Config
