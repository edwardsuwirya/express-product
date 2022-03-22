const express = require('express');
const router = express.Router();
const productRouter = require('./product.route');
const ProductController = require("../controller/product.controller");
const ProductService = require("../service/product.service");
const ProductRepository = require("../repository/product.repository");

const productService = (req, res, next) => {
    req.service = ProductService(ProductRepository);
    next();
}
router.use('/product', productService, productRouter(ProductController));

module.exports = router;
