import { ConflictException, Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { User } from "src/models/users.schema";
import { UserCreateDTO } from "./dtos/user-create.dto";
import { UserUpdateDTO } from "./dtos/user-update.dto";


@Injectable()
export class UsersService {
   constructor(
      @InjectModel(User.name) private usersModel: Model<User>
   ){}

   async getAll() {
      const feature = await this.usersModel.find() 
      return feature;
   }

   async getById(id: Types.ObjectId) {
      const feature = await this.usersModel.findById(id)

      if(!feature) {
         throw new NotFoundException("User not found")
      }

      return feature
   }

   async create(body: UserCreateDTO) {
      const { chat_id } = body;

      const existingUser = await this.usersModel.findOne({
         where: [{ chat_id }],
      });

      if (existingUser) {
         throw new ConflictException('User already exists');
      }
      const feature = await this.usersModel.create(body)
      return feature;
   }

   async update(id: Types.ObjectId, body: UserUpdateDTO) {
      const feature = await this.usersModel.findByIdAndUpdate(id, body, { new: true, lean: true })

      if(!feature) {
         throw new NotFoundException("User not found")
      }

      return feature;
   }

   async delete(id: Types.ObjectId) {
      return await this.usersModel.findByIdAndDelete(id);
   }
}