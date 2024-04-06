import { AbstractDocument } from "@app/common/database/abstract.schema";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class CreateUserDto {

    @ApiProperty()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNotEmpty()
    userName: string;
  
    @ApiProperty()
    @IsEmail()
    email: string;

   @ApiProperty()
    @IsEmail()
    phone: string;
    
    @ApiProperty()
    @IsNotEmpty()
    @MinLength(6)
    password?: string;

}