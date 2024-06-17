import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import  { Model } from 'mongoose';
import { UserInferface } from "./interfaces/users.interfaces";
import { userDtos } from "./dtos/users.dtos";

@Injectable()
export class UserService {
   constructor(@InjectModel('Users') private userModel: Model<UserInferface>) {}

   async create(userDtos: userDtos): Promise<UserInferface> {
      const createdUser = new this.userModel(userDtos);
      return createdUser.save();
   }

   async findAll(): Promise<UserInferface[]> {
      return this.userModel.find().exec();
    }

}
