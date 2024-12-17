import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config({ path: "../.env" });

const DB_URL=process.env.DB_URL;

const DBconnect = async() =>{
    try {
        await mongoose.connect(DB_URL)
        console.log("connected to database")
    } catch (error) {
        console.log("Error During Connection",error)
    }
}

export default DBconnect;