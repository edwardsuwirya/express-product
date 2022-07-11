const productsDb = []
const _ = require('lodash')
const {v4} = require('uuid');
const log = require('../logger')

const ProductRepository = (db) => {
    const lg = log.child({'repo': 'product'}, true)
    const getAll = async () => {
        return await db.any('select * from m_product')
    }
    const getOne = async (id) => {
        return await db.one('select * from m_product where product_code=$1', id)
    }
    const createOne = async (newProduct) => {
        const id = v4();
        const timeStampCreated = new Date()
        try {
            return await db.none('insert into m_product(id,product_code,product_name,category_id,created_at,updated_at) values($1,$2,$3,$4,$5,$6)'
                , [id, newProduct.productCode, newProduct.productName, newProduct.categoryId, timeStampCreated, timeStampCreated])
        } catch (e) {
            lg.error(e.message)
            throw e
        }
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
