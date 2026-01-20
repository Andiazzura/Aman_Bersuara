import { IsString, IsOptional, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()
  username_email?: string;

  @IsString()
  password: string;

  @IsString()
  id_user: string;

  @IsString()
  @IsOptional()
  id_role?: string;

  @IsEmail()
  @IsOptional()
  email?: string;
}
