const ProductRepository = require("../repository/product.repository");
const RepositoryManager = (infraManager) => {
    const {initDb} = infraManager()
    const db = initDb()
    const productRepository = () => {
        return () => ProductRepository(db)
    }

    return {
        productRepository
    }
}
module.exports = RepositoryManager
