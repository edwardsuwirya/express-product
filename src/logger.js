const bunyan = require("bunyan");
const config = require("./config/config");
const {name, logLevel} = config()
const log = bunyan.createLogger({
    name: name,
    level: logLevel,
});

module.exports = log
