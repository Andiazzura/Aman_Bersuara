import { IsString, IsOptional, IsEmail, PartialType } from 'class-validator';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsString()
  @IsOptional()
  username_email?: string;

  @IsString()
  @IsOptional()
  password?: string;

  @IsString()
  @IsOptional()
  id_role?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
