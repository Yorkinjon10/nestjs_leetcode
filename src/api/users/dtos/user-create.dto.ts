import { IsOptional, IsString, ValidateNested } from "class-validator"
import { Types } from "mongoose"

export class UserCreateDTO {
   @IsString()
   first_name: string

   @IsOptional()
   last_name: string

   @IsOptional()
   username: string

   @IsString()
   leetcode_username: string

   @IsString()
   chat_id: string

   @ValidateNested({ each: true })
   groups: Types.ObjectId[] 
}