// logic to connect with database

import mongoose  from "mongoose";



export const connectDB = async () =>{
    await mongoose.connect(process.env.MONGO_DB_URL).then(()=>console.log("db connected"));
}