import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database connected");
  } catch (error) {
    console.log("Database connection failed", error);
    // to immediately terminate the running process with an exit code of 1. It indicates that the program ended due to an error or failure
    // throw error;
    process.exit(1);
  }
};

export default connectDB;
