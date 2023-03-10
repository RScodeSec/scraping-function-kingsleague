import * as db from "./../infrastructure/databse.js";
import mongoose from "mongoose";
/**
 *
 * @param {*} data : data to save;
 * @param {*} T: model of mongoDB;
 */
export async function save(data = [], T) {
  T.insertMany(data, (err, sus) => {
    if (err) throw err;
    console.log("successfully saved");
    mongoose.connection.close();
    console.log("closing connection ");
  });
}
export async function closeConnection() {
  console.log("closing connection");
  await mongoose.connection.close();
}
