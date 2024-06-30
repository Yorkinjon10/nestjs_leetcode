import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument, Types } from "mongoose";

@Schema({ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } })

export class User {
   @Prop()
   first_name: string

   @Prop()
   last_name: string

   @Prop()
   username: string

   @Prop()
   leetcode_username: string

   @Prop()
   chat_id: string

   @Prop({ default: [] })
   groups: Types.ObjectId[] 
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
