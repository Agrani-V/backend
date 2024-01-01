const Product = require('../models/Product');

const getAllProducts =async (req,res) => {
    try{
        const products= await Product.find({});

        res.json(products);
    }   catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const getProductsByName =async (req,res) => {
    try{
        const products= await Product.find({ productName: req.params.productName });

        res.json(products);
    }   catch (error) {
        console.error(error);
        res.status(500).json({message: "Server Error"});
    }
}

const addProduct = async (req, res) => {
    try {
        const newProduct = await Product.create(req.body);
        
        res.status(201).json(newProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findOneAndDelete({ sku: req.params.productSku });
        res.json(deletedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}

const editProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findOneAndUpdate(
            { sku: req.params.productSku }, 
            req.body, 
            { new: true });
        res.json(updatedProduct);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
}


module.exports = {
    getAllProducts,
    getProductsByName,
    addProduct,
    deleteProduct,
    editProduct
};