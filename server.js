import express from 'express'
import morgan from 'morgan'

import path from 'path'

const app = express()


app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('/public'))

app.set('views', path.join('./public/views'));
app.set('view engine', 'ejs');

// app.use('/', (req,res)=>{
//     const currentSession = 'hola'
//     const currentPort = PORT
//     res.render('loginPage', {currentSession, currentPort })
// })

const PORT = 8000

const server = app.listen(PORT, () =>
console.log(`Server started on PORT http://localhost:${PORT} --${process.pid} -- at ${new Date().toLocaleString()}`)
);

server.on('error', (err) => {
console.log('Error en el servidor:', err)
})