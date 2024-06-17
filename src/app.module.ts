import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';
import { UserService } from './users/users.service';
// mongodb+srv://username:password@cluster0.mongodb.net/myDatabase?retryWrites=true&w=majority
@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb://abdukhalilovyorkinjon2025:9Sw-6jfE$aGh$G4@cluster0.edrvw4g.mongodb.net/', { 
      dbName: 'nestjs_leetcode'
    }),
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
  ],
  controllers: [AppController, UserController], 
  providers: [AppService, UserService],
}) 
export class AppModule {}