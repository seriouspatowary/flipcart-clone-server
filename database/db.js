import dotenv from 'dotenv';
import mongoose from "mongoose";


dotenv.config();

export const Connection = async()=>{
 
  
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Connected to MongoDB");

    } catch (error) {
        console.log('Error while connecting with the database',error.message)
    }

}


export default Connection;