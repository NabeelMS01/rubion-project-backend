import { Module } from '@nestjs/common';
import { UsersController } from './controllers/user.controller';
import { UsersService } from './services/user.service';
import { ConfigModule } from '@nestjs/config';
import Joi from 'joi';
import { DatabaseModule } from '@app/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';
 

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal:true,
    validationSchema: Joi?.object({
      MONGODB_URI: Joi?.string().required(),
    }),
    envFilePath:'./apps/user/.env'
  }),
  DatabaseModule,
  MongooseModule.forFeature([
    {name:User.name,schema:UserSchema}
  ])
],

  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
