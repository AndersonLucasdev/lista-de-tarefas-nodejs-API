import express from 'express'
import Route from "./src/routes/route.js"
import connectDatabase from './src/database/db.js'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from "dotenv"
import cookieParser from 'cookie-parser'

dotenv.config()

const app = express()
const port = 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(cors())
connectDatabase()

app.use(cookieParser())
app.use(express.json())
app.use('/', Route)


app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))