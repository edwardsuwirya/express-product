const productsDb = []
// const pgp = require('pg-promise')(/* options */)
// const db = pgp('postgres://username:password@host:port/database')
const _ = require('lodash')


const ProductRepository = () => {
    const getAll = () => {
        return new Promise((resolve, reject) => {
            resolve(productsDb)
        })
    }
    const getOne = (id) => {
        return new Promise((resolve, reject) => {
            const res = _.filter(productsDb, (o) => o.id === id);
            resolve(res)
        })
    }
    const createOne = (newProduct) => {
        return new Promise((resolve, reject) => {
            productsDb.push(newProduct)
            resolve(newProduct)
        })
    }
    const updateOne = (newProduct) => {
        return new Promise((resolve, reject) => {
            let idx = _.findIndex(productsDb, (o) => o.id === newProduct.id);
            if (idx !== -1) {
                let product = productsDb[idx];
                product.productName = newProduct.productName
                product.productDescription = newProduct.productDescription
                resolve(product)
            } else {
                reject({type: 'DATA_NOT_FOUND', message: 'Product not found'})
            }
            return null
        })
    }
    const deleteOne = (id) => {
        return new Promise((resolve, reject) => {
            _.remove(productsDb, (o) => o.id === id)
            resolve(id)
        })
    }
    return {
        getAll, getOne, createOne, updateOne, deleteOne
    }
}

module.exports = ProductRepository
