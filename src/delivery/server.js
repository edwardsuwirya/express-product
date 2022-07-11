const http = require("http");
const express = require('express')
const app = express()
const errorMiddleware = require('./middleware/error.middleware')
const jsonMiddleware = require('./middleware/json.middleware')
const noRoute = require("./routes/no.route");
const errorRoute = require("./routes/error.route");
const log = require("../logger");
const requestLogMiddleware = require("./middleware/requestlog.middleware");
const ProductRoute = require("./routes/product.route");
const Config = require("../config/config");
const InfraManager = require("../manager/infra.manager");
const ServiceManager = require("../manager/service.manager");
const ProductController = require("./controller/product.controller");
const RepositoryManager = require("../manager/repository.manager");
const AppRouter = require("./routes");


const Server = () => {
    const {port, host} = Config()
    const infraManager = () => InfraManager(Config);
    const repoManager = () => RepositoryManager(infraManager);
    const serviceManager = () => ServiceManager(repoManager)

    const initProductRoute = () => {
        const productController = () => ProductController(serviceManager().productService())
        return ProductRoute(productController)
    }
    const initController = () => {
        app.use(jsonMiddleware);
        app.use(requestLogMiddleware)
        app.use(AppRouter(initProductRoute()));
        app.use(errorRoute);
        app.use(errorMiddleware);
        app.use(noRoute);
    }
    const run = () => {
        initController();
        const server = http.createServer(app);
        server.on('error', function (e) {
            log.fatal('Server failed to start ', e.message)
        });
        server.listen(port, host, function () {
            if (server.listening) {
                log.info(`Example app listening on port ${port}`)
            }
        });
    }

    return {
        run
    }
}
module.exports = Server;
