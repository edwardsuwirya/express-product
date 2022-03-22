const express = require('express');
const router = express.Router();

const ProductRoute = (productController) => {
    const {getProductList, addNewProduct, deleteProduct, updateProduct} = productController()
    router.get('/', getProductList);
    router.post('/', addNewProduct);
    router.delete('/:id', deleteProduct);
    router.put('/', updateProduct);
    return router
}

module.exports = ProductRoute;
