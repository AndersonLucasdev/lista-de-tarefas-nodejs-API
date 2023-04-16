import mongoose from 'mongoose'
import atividadeService from '../services/services.js'

const verificaId = (req, res, next) => {
    try {
        const id = req.params.id
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).send({message:"Id invalido"})
        }

        next()
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const verificaActive = async (req, res, next) => {
    try {
        const id = req.params.id

        const active = await atividadeService.findbyIdService(id)
        
        if (!active) {
            return res.status(400).send({message:"Usuario não existe"})
        }

        req.id = id
        req.active = active

        next()
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}


export {
    verificaActive,
    verificaId
}