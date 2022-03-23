const server = require("./src/server");
const config = require("./src/config")
const dbConn = require("./src/db")
const log = require("./src/logger");

const {port, host} = config()
dbConn.connect().then(o => {
    server.listen(port, host, function () {
        if (server.listening) {
            log.info(`Example app listening on port ${port}`)
        }
    });
    o.done()
}).catch(error => {
    log.fatal('ERROR:', error.message || error)
})

