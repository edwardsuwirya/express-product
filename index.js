const server = require("./src/server");
const config = require("./src/config")

const {port, host} = config()
server.listen(port, host, function () {
    if (server.listening) {
        console.log(`Example app listening on port ${port}`)
    }
});
