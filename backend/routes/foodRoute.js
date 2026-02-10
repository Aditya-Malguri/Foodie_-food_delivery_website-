import express from 'express';
import { addFood,listFood,removeFood } from '../controller/foodController.js';
import multer from 'multer';

const foodRouter = express.Router();




//logic so that image save in upload folder (image storage engine)

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{ // cb is callback
        return cb(null,`${Date.now()}${file.originalname }`)   // file name will be unique everytime
    }
})

const upload = multer({storage:storage})


foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)

export default foodRouter;