import atividades from '../models/models.js'

const createService = (body) => atividades.create(body)

const findAllService = () => atividades.find()

const findbyIdService = (id) => atividades.findById(id)

export default {
    createService,
    findAllService,
    findbyIdService
}