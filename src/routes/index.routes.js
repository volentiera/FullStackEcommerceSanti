import express from 'express'
const router = express.Router()
import routeProducts from './products.routes.js'
import routeRegister from './register.routes.js'
import passport from 'passport'

router.use(passport.initialize())
router.use(passport.session())

router.use('/api/productos', routeProducts)
router.use('/api/registro', routeRegister)

router.get('/', (req, res) => {
    res.redirect('/api/registro')
})

export default router