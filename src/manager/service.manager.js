const ProductService = require("../service/product.service");
const ServiceManager = (repoManager) => {
    const {productRepository} = repoManager()
    const productService = () => {
        return () => ProductService(productRepository())
    }

    return {
        productService
    }
}
module.exports = ServiceManager
