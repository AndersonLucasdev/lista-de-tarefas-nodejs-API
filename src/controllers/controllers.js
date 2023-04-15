import atividadeService from "../services/services.js"
import mongoose from "mongoose"

const cadastro = async (req, res) => {
    const {
        descricao
    } = req.body

    // verifica se um campo não foi digitado
    if (!descricao) {
        res.status(400).send({message: "há um campo vazio"})

    }else {

        const atividade = await atividadeService.createService(req.body)

        if (!atividade) {
            res.status(400).send({message: "Erro na criação da atividade"})
        }
        
            res.status(201).json(
                {  
                    user: {
                        id: atividade._id,
                        atividade
                    },
                    message: "atividade cadastrada com sucesso"
            }
        )
    }
}

const findAll = async (req, res) => {
    const actives = await atividadeService.findAllService()

    if (actives.length === 0) {
        return res.status(400).send({message:"Não há atividades cadastradas"})
    }   else {
        res.send(actives)
    }
}

const findbyId = async (req, res) => {
    const id = req.params.id
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).send({message:"Id invalido"})
    }

    const active = await atividadeService.findbyIdService(id)
    
    if (!active) {
        return res.status(400).send({message:"Usuario não existe"})
    }   else {
        res.send(active)
    }
}

export {
    cadastro,
    findAll,
    findbyId
}