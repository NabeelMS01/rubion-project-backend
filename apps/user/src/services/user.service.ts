import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { CreateUserDto } from '../dto/createUserDto';

@Injectable()
export class UsersService {
  private userRepository :UserRepository
  getHello(): string {
    return 'Hello World!';
  }


  async createUser(body:CreateUserDto){
    return await this.userRepository.create(body)
    
  }
}
