const {FailedCreateError} = require("../utils/apperror");

const ProductService = (productRepository) => {
    const {getAll, getOne, createOne, updateOne, deleteOne} = productRepository()
    const getAllProductInfo = async () => {
        return await getAll()
    }
    const getProductInfoById = async (id) => {
        return await getOne(id)
    }
    const newProductRegistration = async (newProduct) => {
        try {
            return await createOne(newProduct);
        } catch (e) {
            throw new FailedCreateError('Failed to create product')
        }
    }
    const updateProductInfo = async (newProduct) => {
        return await updateOne(newProduct)
    }
    const deactivatedProduct = async (id) => {
        return await deleteOne(id)
    }
    return {
        getAllProductInfo, getProductInfoById, newProductRegistration, updateProductInfo, deactivatedProduct
    }
}

module.exports = ProductService
