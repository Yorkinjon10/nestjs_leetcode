import { IsOptional, IsString, ValidateNested } from "class-validator"
import { Types } from "mongoose"

export class UserUpdateDTO {
   @IsString()
   @IsOptional()
   first_name?: string

   @IsOptional()
   last_name?: string

   @IsOptional()
   @IsOptional()
   username?: string

   @IsString()
   @IsOptional()
   leetcode_username?: string

   @IsString()
   @IsOptional()
   chat_id?: string

   @ValidateNested()
   @IsOptional()
   groups?: Types.ObjectId[] 
}