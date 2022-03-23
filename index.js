const server = require("./src/server");
const config = require("./src/config")
const dbConn = require("./src/db")

const {port, host} = config()
dbConn.connect().then(o => {
    server.listen(port, host, function () {
        if (server.listening) {
            console.log(`Example app listening on port ${port}`)
        }
    });
    o.done()
}).catch(error => {
    console.log('ERROR:', error.message || error)
})

