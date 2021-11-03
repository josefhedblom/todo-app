import { connect } from "mongoose";

const dbString = "mongodb://localhost:27017/todo-app";


const connectDB = async () => {
  try {
    await connect(dbString);
    console.log('Connected to database....');
  } catch (error) {
    console.error(error);
    console.log('Error');
    process.exit(1);
  }
};

export default connectDB;