import foodModel from "../models/foodModel.js";
import fs from 'fs';  //file system

//add food item or store product data in the database
// creating the api of adding ,listing and removing


const addFood = async (req,res) =>{

    

    try {
        if (!req.file) {
        return res.status(400).json({
            success: false,
            message: "Image is required"
        });
        }

        let image_filename = `${req.file.filename}` ;

    
    
        const food = new foodModel({
            name:req.body.name,
            description:req.body.description,
            price:req.body.price,
            category:req.body.category,
            image:image_filename
        })
    

    
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }
}

const listFood = async (req,res) =>{
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


const removeFood = async(req,res) =>{
    try {
        const food = await foodModel.findById(req.body.id);
        //delete the image from upload folder 
        fs.unlink(`uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true,message:"Food Removed"});
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}


export {listFood,addFood,removeFood}
