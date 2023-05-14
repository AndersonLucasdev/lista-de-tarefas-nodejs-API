import atividadeService from "../services/services.js"


const cadastro = async (req, res) => {
    try {
        const {
            descricao
        } = req.body

        // verifica se um campo não foi digitado
        if (!descricao) {
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
                            descricao
                        },
                        message: "atividade cadastrada com sucesso"
                    }
                )
        }
    } catch(error) {
        res.status(500).send({message: error.message})
}}

const findAll = async (req, res) => {
    try {
        const actives = await atividadeService.findAllService()

        if (actives.length === 0) {
            return res.status(400).send({message:"Não há atividades cadastradas"})
        }   else {
            res.send(actives)
        }
    } catch(error) {
        res.status(500).send({message: error.message})
    }
}


const findbyId = async (req, res) => {
    try {
    const active = req.active

    res.send(active)
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const update = async (req, res) => {
    try {
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
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}

const remove = async (req, res) => {
    try {
        const {id} = req

        if(!id) {
            return res.status(400).json({message: "Id invalido"})
        }

        const removido =  await atividadeService.deleteByID(id)

        res.status(200).json({message: "atividade excluida com sucesso", removido})
    }

    catch (error) {
        res.status(500).send({message: error.message})
    }
}

export {
    cadastro,
    findAll,
    findbyId,
    update,
    remove
}