import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL, 
  {
  useNewUrlParser : true,
  useFindAndModify : true,
  useUnifiedTopology : true
  }
);


const db = mongoose.connection;

const handleOpen = function () {
  console.log("connected to DB");
};
const handleError = function (error) {
  console.log(`Error on DB connection : ${error}`);
}

db.once("open", handleOpen);
db.on("error", handleError);