import express from 'express'
import asyncHandler from 'express-async-handler'
// import {
//   getProducts,
//   getProductById,
//   deleteProduct,
//   createProduct,
//   updateProduct,
//   createProductReview,
//   getTopProducts,
// } from '../controllers/productController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'
import Product from '../models/productModel.js'
const router = express.Router()

router.get('/',  asyncHandler (async (req, res)=> {
  const products = await Product.find({})
  res.json(products)
}))

router.get('/:id', 
  asyncHandler(async (req, res)=> {
    const product = await Product.findById(req.params.id)
    if(product) {
      res.json(product)
    } else {
      res.status(404)
      throw new Error('查询不到这个产品')
    }
}))

// router.route('/').get(getProducts).post(protect, admin, createProduct)
// router.route('/top').get(getTopProducts)
// router
//   .route('/:id')
//   .get(getProductById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)
// router.route('/:id/reviews').post(protect, createProductReview)

export default router
