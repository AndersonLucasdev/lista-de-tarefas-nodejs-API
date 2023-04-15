import { Router } from 'express'
import {cadastro, findAll, findbyId} from '../controllers/controllers.js'

const route = Router()

route.post("/", cadastro)
route.get("/", findAll)
route.get("/:id", findbyId)

export default route