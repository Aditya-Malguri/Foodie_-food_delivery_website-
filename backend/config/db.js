// logic to connect with database

import mongoose  from "mongoose";



export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://FoodDel:asdfgasdfgasdfgasdfg@cluster0.15hyjdo.mongodb.net/food-del').then(()=>console.log("db connected"));
}