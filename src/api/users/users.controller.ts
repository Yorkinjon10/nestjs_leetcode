import { Body, Controller, Get, Param } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ResponseDTO } from "src/common/decorators/response.decorator";
import { UserResponseDTO } from "./dtos/user-response.dto";
import { Types } from "mongoose";
import { UserCreateDTO } from "./dtos/user-create.dto";
import { UserUpdateDTO } from "./dtos/user-update.dto";


@Controller("/api/users")
export class UsersController {
   constructor(private readonly userService: UsersService) {}

   @Get("/")
   @ResponseDTO(UserResponseDTO)
   async getAll(){
      const users = await this.userService.getAll();
      return { data: users }
   }

   async getAllById(@Param() id: Types.ObjectId) {
      const user = await this.userService.getById(id);
      return { data: user }
   }

   async create(@Body() body: UserCreateDTO) {
      const user = await this.userService.create(body);
      return { data: user }
   }

   async update(@Param() id: Types.ObjectId, @Body() body: UserUpdateDTO) {
      const user = await this.userService.update(id, body);
      return { data: user }
   }

   async delete(@Param() id: Types.ObjectId) {
      await this.userService.delete(id);
      return null;
   }
}