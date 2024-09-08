import dotenv from "dotenv";
import connectDB from "./db/config.js";
import {app} from "./app.js"

dotenv.config();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is Running on ${process.env.PORT}`.red.bgYellow);
    });
  })
  .catch((error) => {
    console.log("Mongo DB Connection Failed", error);
  });
