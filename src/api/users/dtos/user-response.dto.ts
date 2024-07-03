import { Expose, Transform } from "class-transformer"
import { Types } from "mongoose"

export class UserResponseDTO {
   @Expose()
   @Transform((param) => param.obj._id)
   _id: string

   @Expose()
   first_name: string

   @Expose()
   last_name: string

   @Expose()
   username: string

   @Expose()
   leetcode_username: string

   @Expose()
   chat_id: string

   @Expose()
   groups: Types.ObjectId[] 
}