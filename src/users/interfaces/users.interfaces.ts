import { Document } from "mongoose";

export interface UserInferface extends Document {
   readonly first_name: String,
   readonly last_name: String,
   readonly username: String,
   readonly age: Number,
   readonly email: String
}