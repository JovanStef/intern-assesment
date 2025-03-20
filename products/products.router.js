import express from 'express'
import ProductsController from "./products.controller.js"

const productsRouter = express.Router()

productsRouter.get('/', [ProductsController.getProducts])

export default productsRouter