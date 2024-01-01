const express = require('express');
const router = express.Router();

const {getAllProducts, getProductsByName, addProduct, deleteProduct, editProduct} = require('../controller/productControllers')

//@desc GET all products from db
//@route GET /api/products
//@access Public
router.get('/', getAllProducts)

//@desc GET a product by name from db
//@route GET /api/products/:productName
//@access Public
router.get('/name/:productName', getProductsByName)

//@desc POST a new product to db
//@route POST /api/products
//@access Public
router.post('/', addProduct);

//@desc PUT/update a product by ID in db
//@route PUT /api/products/:productId
//@access Public
router.put('/sku/:productSku', editProduct);

module.exports = router;