import ProductsDataService from "./products.data.service.js";

export default class ProductsController {
    static async getProducts(req,res){
        try {
            const products = await ProductsDataService.getProducts()
            res.status(200).send(JSON.stringify(products))
        } catch (error) {
            res.status(500).send(JSON.stringify(error))
        }
    }
}