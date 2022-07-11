const ProductController = (productService) => {
    const {getAllProductInfo, newProductRegistration, updateProductInfo, deactivatedProduct} = productService()

    const getProductList = async (req, res, next) => {
        try {
            const products = await getAllProductInfo()
            res.json(products);
        } catch (e) {
            next(e)
        }
    };

    const addNewProduct = async (req, res, next) => {
        try {
            const product = req.body;
            const newProduct = await newProductRegistration(product)
            res.json(newProduct);
        } catch (e) {
            next(e)
        }
    };

    const updateProduct = async (req, res, next) => {
        try {
            const product = req.body;
            const updatedProduct = await updateProductInfo(product);
            res.json(updatedProduct);
        } catch (e) {
            next(e)
        }
    };

    const deleteProduct = async (req, res, next) => {
        try {
            const productId = req.query.id;
            const id = await deactivatedProduct(productId)
            res.json({id: id});
        } catch (e) {
            next(e)
        }
    };
    return {
        getProductList, addNewProduct, updateProduct, deleteProduct
    }
}


module.exports = ProductController;
