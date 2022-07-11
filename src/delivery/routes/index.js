const express = require('express');
const router = express.Router();

const AppRouter = (productRoute) => {
    router.use('/product', productRoute);
    return router;
}


module.exports = AppRouter;
