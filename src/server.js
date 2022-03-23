const http = require("http");
const express = require('express')
const app = express()
const appRouter = require('./routes/index')
const errorMiddleware = require('./middleware/error.middleware')
const jsonMiddleware = require('./middleware/json.middleware')
const noRoute = require("./routes/no.route");
const errorRoute = require("./routes/error.route");
const log = require("./logger");
const requestLogMiddleware = require("./middleware/requestlog.middleware");

app.use(jsonMiddleware);
app.use(requestLogMiddleware)
app.use(appRouter);
app.use(errorRoute);
app.use(errorMiddleware);
app.use(noRoute);

const server = http.createServer(app);
server.on('error', function (e) {
    log.fatal('Server failed to start ', e.message)
});
module.exports = server;
