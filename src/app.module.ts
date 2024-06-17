import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from './schemas/users.schema';

@Module({
  imports: [
    MongooseModule.forRoot( 'mongodb+srv://abdukhalilovyorkinjon2025:9Sw-6jfE$aGh$G4@cluster0.edrvw4g.mongodb.net/'),
    MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService],
})
export class AppModule {}
