import mongoose from 'mongoose'
import atividadeService from '../services/services.js'

const verificaId = (req, res, next) => {
    const id = req.params.id
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message:"Id invalido"})
    }

    next()
}

const verificaActive = async (req, res, next) => {
    const id = req.params.id

    const active = await atividadeService.findbyIdService(id)
    
    if (!active) {
        return res.status(400).send({message:"Usuario não existe"})
    }

    req.id = id
    req.active = active

    next()
}


export {
    verificaActive,
    verificaId
}