import { Body, Controller, Get, Ip, Post, Req, Res } from "@nestjs/common";
import { UserInferface } from "./interfaces/users.interfaces";
import { UserService } from "./users.service";
import { userDtos } from "./dtos/users.dtos";

@Controller("users")
export class UserController {
   constructor(private readonly userService: UserService) {}

   //get all users
   @Get()
   async getUsers(@Req() request: Request, @Res() response: Response, @Ip() ip: ParameterDecorator): Promise<UserInferface[]> {
      console.log(ip)
      return this.userService.findAll()
   }

   // get user by ID
   // @Get(':id')
   // async findAll(): Promise<UserInferface[]> {
   //    return this.;
   // }

   // create new user
   @Post()
   async createUser(@Body() createUserDto: userDtos): Promise<UserInferface>{
      return this.userService.create(createUserDto)
   }
}