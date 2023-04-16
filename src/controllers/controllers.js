import atividadeService from "../services/services.js"


const cadastro = async (req, res) => {
    const {
        descricao, dia
    } = req.body

    // verifica se um campo não foi digitado
    if (!descricao || !dia) {
        res.status(400).send({message: "há um campo vazio"})

    } else {

        const atividade = await atividadeService.createService(req.body)

        if (!atividade) {
            res.status(400).send({message: "Erro na criação da atividade"})
        }
        
            res.status(201).json(
                {  
                    user: {
                        id: atividade._id,
                        descricao,
                        dia
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
    const active = req.active

    res.send(active)

}

const update = async (req, res) => {
    const {
        descricao, dia
    } = req.body

    if (!descricao && !dia) {
        res.status(400).send({message: "coloque pelo menos um campo"})
    } else {

        const {id, active} = req

        await atividadeService.updateService(
            id,
            descricao,
            dia
        )

        res.send({message:"Atividade atualizada com sucesso"})
    }
}

export {
    cadastro,
    findAll,
    findbyId,
    update
}