import { Schema } from "mongoose";

export const UserSchema = new Schema({
   first_name: String,
   last_name: String,
   username: String,
   age: Number,
   email: String
})