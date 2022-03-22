// const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgres://username:password@host:port/database')
const _ = require('lodash')

const ProductService = (productRepository) => {
    const {getAll, getOne, createOne, updateOne, deleteOne} = productRepository()
    const getAllProductInfo = async () => {
        return await getAll()
    }
    const getProductInfoById = async (id) => {
        return await getOne(id)
    }
    const newProductRegistration = async (newProduct) => {
        return await createOne(newProduct);
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
