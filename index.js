import express from 'express'
import Route from "./src/routes/route.js"
import connectDatabase from './src/database/db.js'

const app = express()
const port = 3000;

connectDatabase()

app.use(express.json())
app.use('/list', Route)
app.use(cors())

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`))