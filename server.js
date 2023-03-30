import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import morgan from 'morgan'

import path from 'path'
import routes from './src/routes/index.routes.js';
import { dbconnection } from './src/db/ecommerce.db.js';
dbconnection
import logger from './src/utils/logger.js';


const app = express()


app.use(morgan('dev'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(express.static('/public'))

app.set('views', path.join('./public/views'));
app.set('view engine', 'ejs');

app.use(routes)


const PORT = 8000

const server = app.listen(PORT, () =>
logger.info(`Server started on PORT http://localhost:${PORT} --${process.pid} -- at ${new Date().toLocaleString()}`)
);

server.on('error', (err) => {
logger.info('Error en el servidor:', err)
})