const isAuth = (req, res, next) => {
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/api/login')
    }
}
export default isAuth