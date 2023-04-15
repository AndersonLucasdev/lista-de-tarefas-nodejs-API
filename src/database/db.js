import mongoose from 'mongoose'


const connectDatabase = () => {
    mongoose.connect("mongodb+srv://andersonlucas8:andinlucas8@cluster0.b2b53xu.mongodb.net/?retryWrites=true&w=majority",{
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => console.log("MongoDB Atlas conectado")).catch((error) => console.log(error))


}

export default connectDatabase