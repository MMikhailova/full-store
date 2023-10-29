import Product from "../models/product.js";

const productControllers = {
    getProducts: (req, res) => {
        const products = Product.getProducts();
        res.status(200).json({ ok: true, products: products });
    },
    getProductById: (req, res) => {
        const { id } = req.params;
        const productExist = Product.getProduct(id);
        if (productExist) {
            res.status(200).json({ ok: true, product: productExist });
        } else {
            res.status(400).json({
                ok: false,
                message: `There is not product with id= ${id}`
            });
        }
    },
    addProduct: (req, res) => {
        const { category, name, price, url } = req.body;
        if (!category || !name || !price || !url) {
            res.status(400).json({
                ok: false,
                message: 'Please fill in all the fields'
            });
        } else {
            const newProduct = new Product(category, name, price, url);
            newProduct.addProduct();
            res.status(302).json({
                ok: true,
                message: `${newProduct.name} was added to the ${category} `
            });
        }
    },
    updateProduct: (req, res) => {
        const { id } = req.params;
        const { category, name, price, url } = req.body;
       
        const updatedProduct = { category, name, price, url };
        const productExist = Product.updateProduct(id, updatedProduct);
        if (productExist) {
            res.status(200).json({ ok: true, message: `The product is updated` })
        } else {
            res.status(400).json({ message:`The product doesn't exist`});
        }
    },
    deleteProduct: (req, res) => {
        const { id } = req.params;
        const productExist = Product.deleteProduct(id);
        if (productExist) {
            res.status(200).json({ok:true,message:`the product with id=${id}is deleted`});
        } else {
            res.status(404).json({ok:false, message: `the product with id=${id} doesn't exist` });
        }
    }
    
};
export default productControllers