import express from 'express'
const router = express.Router()
import * as productsController from '../controllers/products.controller.js'

router.get('/:_id?', productsController.getProducts)
router.post('/',productsController.createProduct)
router.delete('/:_id', productsController.deleteProductById)
router.put('/:_id', productsController.updateProduct)
router.get('/categoria/:category', productsController.getProductsByCategory)


export default router;
