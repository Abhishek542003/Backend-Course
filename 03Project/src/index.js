import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/config.js";
import {app} from "./app.js"



connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running on ${process.env.PORT}`.red.bgYellow);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Connection Failed", error);
  });
