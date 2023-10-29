import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import productControllers from '../controllers/product.js';

const router = express.Router();

router.get('/', productControllers.getProducts);
router.get('/:id', productControllers.getProductById);
router.post('/add-product', verifyToken, productControllers.addProduct);
router.put('/:id', verifyToken, productControllers.updateProduct);
router.delete('/:id',verifyToken,productControllers.deleteProduct)

export default router;
