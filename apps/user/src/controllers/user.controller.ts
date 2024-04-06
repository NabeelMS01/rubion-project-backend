import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from '../services/user.service';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  getHello(): string {
    return this.usersService.getHello();
  }

  @Post('/create')
  createUser(@Body() body ){
    return this.usersService.createUser(body)
  }
}
