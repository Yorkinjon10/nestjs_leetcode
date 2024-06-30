import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/models/users.schema";

@Module({
   imports: [
      MongooseModule.forFeature([{
         name: User.name,
         schema: UserSchema
      }])
   ],
   controllers: [],
   providers: [],
   exports: [],
})

export class UsersModule {}