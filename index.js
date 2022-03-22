const dotenv = require('dotenv');
dotenv.config()
const server = require("./src/server");
const port = process.env.APP_PORT || 3000
const host = process.env.APP_HOST || 'localhost'

server.listen(port, host, function () {
    if (server.listening) {
        console.log(`Example app listening on port ${port}`)
    }
});
