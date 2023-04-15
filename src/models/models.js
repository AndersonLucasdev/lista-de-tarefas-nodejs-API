import mongoose from 'mongoose'

const atividadeSchema = new mongoose.Schema({
    descricao: {
        type: String,
        required: true,
        unique: true
    }
})


const atividades = mongoose.model("atividades", atividadeSchema)

export default atividades