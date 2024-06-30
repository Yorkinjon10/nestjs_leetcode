import { Expose } from "class-transformer"
import { IsOptional, IsString } from "class-validator"
import { Types } from "mongoose"

export class UserResponseDTO {
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