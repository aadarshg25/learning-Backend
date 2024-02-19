//Approach 2 . Connecting to DB
//require("dotenv").config({ path: "./env" }); //  this will work just fine but dosent look that nice as we are using import as wella as require
import dotenv from "dotenv";
import ConnectDB from "./db/index.js";
dotenv.config({
  path: "./env",
}); // we also need to make changes in dev of json too

ConnectDB();

//Approach 1 . Connecting to DB

// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
// import express from "express";

// // while writing any ifi (the function gets executed there only) it is a professional practice to start with a semi colon(;)
// // ;(()=>{})()

// // always remeber the DB connection is a time taking process so always make it async and wrap it in try and catch block as sometime there it may show some error
// const app = express()(async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

//     //some coder add the listners here only
//     // check for listning to error
//     app.on("error", (error) => {
//       console.log("Error :", error);
//       throw error;
//     });
//     //check for the ports
//     app.listen(process.env.PORT, () => {
//       console.log(`App is listning on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.error("Error : ", error);
//     throw err;
//   }
// })();
