import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://greatstack:9999@cluster0.t7ioi.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}

//mongodb+srv://greatstack:9999@cluster0.t7ioi.mongodb.net/?
