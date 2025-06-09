import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';
const connectDb= async ()=>{
mongoose.set("strictQuery",true)
 try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log('monogodb connected');
 } catch (error) {
    console.error(error);
    
 }
}
export default connectDb;