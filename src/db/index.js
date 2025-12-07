import mongoose from "mongoose";
import { DB_NAME } from "../constanse.js";

const dbConnect = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}/${DB_NAME}`);
        console.log("DB CONNECTED SUCCESSFULY")
    } catch(error) {
        console.log("DB connection FAILED", error);
        process.exit(1);
    }
}

export default dbConnect;