const log = require("../logger");
const requestLogMiddleware = (req, res, next) => {
    let logChild = log.child({url: req.originalUrl, method: req.method, body: req.body}, false)
    req.log = logChild
    logChild.info('access')
    next()
}

module.exports = requestLogMiddleware

