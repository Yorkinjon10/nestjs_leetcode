import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersService } from "./users.service";
import { ResponseDTO } from "src/common/decorators/response.decorator";
import { UserResponseDTO } from "./dtos/user-response.dto";
import { Types } from "mongoose";
import { UserCreateDTO } from "./dtos/user-create.dto";
import { UserUpdateDTO } from "./dtos/user-update.dto";
import { ParseObjectIdPipe } from 'nestjs-object-id';

@Controller("/api/users")
export class UsersController {
   constructor(private readonly userService: UsersService) {}

   @Get("/")
   @ResponseDTO(UserResponseDTO)
   async getAll(){
      const users = await this.userService.getAll();
      return { data: users }
   }

   @Get("/:id")
   @ResponseDTO(UserResponseDTO)
   async getAllById(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
      const user = await this.userService.getById(id);
      return { data: user }
   }

   @Post("/")
   @ResponseDTO(UserResponseDTO)
   async create(@Body() body: UserCreateDTO) {
      const user = await this.userService.create(body);
      return { data: user }
   }

   @Put("/:id")
   @ResponseDTO(UserResponseDTO)
   async update(@Param('id', ParseObjectIdPipe) id: Types.ObjectId, @Body() body: UserUpdateDTO) {
      const user = await this.userService.update(id, body);
      return { data: user }
   }

   @Delete("/:id")
   async delete(@Param('id', ParseObjectIdPipe) id: Types.ObjectId) {
      await this.userService.delete(id);
      return null;
   }
}