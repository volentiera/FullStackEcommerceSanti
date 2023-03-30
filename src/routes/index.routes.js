import express from 'express'
const router = express.Router()
import routeProducts from './products.routes.js'

router.use('/api/productos', routeProducts)

router.get('/', (req, res) => {
    res.redirect('/api/productos')
})

export default router