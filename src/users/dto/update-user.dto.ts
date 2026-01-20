import { IsString, IsOptional, IsEmail, MinLength, MaxLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  @MaxLength(255)
  username_email?: string;

  @IsString()
  @IsOptional()
  @MinLength(6)
  password?: string;

  @IsString()
  @IsOptional()
  id_role?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
