import * as productsApi from '../api/products.api.js';
import logger from '../utils/logger.js'

export const getProducts = async (req,res) =>{
    try {
        const currentSession = 'hola'
        const currentPort = '8000'
        if (req.params._id){
            const product = await productsApi.get(req.params.id)
            return res.render('infoPage', {currentPort,currentSession,product})
        }
        const products = await productsApi.get()
        return res.render('index', {currentPort,currentSession,products})
    } catch (error) {
        logger.warn(`error getting product ${error}`)
    }
}
export const createProduct = async (req,res)=>{
    try {
        const productToCreate = req.body
        await productsApi.create(productToCreate)
        return res.redirect('/api/productos')
    } catch (error) {
        logger.warn(`error creating product ${error}`)
    }
}
export const updateProduct = async (req,res)=>{
    try {
        const _id = req.params.id
        const productToUpdate = req.body
        await productsApi.update(_id, productToUpdate)
        return res.redirect('/api/productos')
    } catch (error) {
        logger.warn(`error updating product ${error}`)
    }
}
export const deleteProductById = async (req, res)=>{
    try {
        const _id = req.params.id
        await productsApi.deleteById(_id)
        return res.redirect('/api/productos')
    } catch (error) {
        logger.warn(`error deleting product ${error}`)
    }
}