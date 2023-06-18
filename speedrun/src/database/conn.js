// const MONGO_URI="mongodb+srv://ingeniousguy29:chalbe101@cluster0.uxgjqsn.mongodb.net/?retryWrites=true&w=majority"
import mongoose from 'mongoose';

const connectMongo = async () => {
    try{

        const { connection }  = await mongoose.connect(process.env.MONGO_URI)

        if(connection.readyState == 1){
            console.log("Database Connected")
        }

    }catch(errors){
        return Promise.reject(errors)
    }
}

export default connectMongo;