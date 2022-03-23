const Product = (id, productCode, productName, categoryId, createdAt, updatedAt, deletedAt) => {
    return {
        id,
        productCode,
        productName,
        categoryId,
        createdAt,
        updatedAt,
        deletedAt
    }
}

module.exports = Product;
