import mongoose from "mongoose";

// Function to connect mongo db database

export const connectDB = async()=>{
    try {
        // Adding event ===> connected
        mongoose.connection.on('connected', ()=> console.log("Database connected"));
        await mongoose.connect(`${process.env.MONGODB_URI}/chat-app`)
        
    } catch (error) {
        console.log(error);        
    }
}