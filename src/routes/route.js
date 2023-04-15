import { Router } from 'express'
import {cadastro, findAll, findbyId, update} from '../controllers/controllers.js'

const route = Router()

route.post("/", cadastro)
route.get("/", findAll)
route.get("/:id", findbyId)
route.patch("/:id", update)

export default route