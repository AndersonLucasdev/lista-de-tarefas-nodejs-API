import { Router } from 'express'
import {cadastro, findAll, findbyId, update} from '../controllers/controllers.js'
import { verificaActive, verificaId } from '../middlewares/global.middlewares.js'

const route = Router()

route.post("/", cadastro)
route.get("/", findAll)
route.get("/:id", verificaId, verificaActive, findbyId)
route.patch("/:id", verificaId, verificaActive, update)

export default route