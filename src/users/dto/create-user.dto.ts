import { IsString, IsOptional, IsEmail, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(1)
  id_user: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  @IsOptional()
  @MaxLength(255)
  username_email?: string;

  @IsEmail()
  @IsOptional()
  email?: string;

  @IsString()
  @IsOptional()
  id_role?: string;
}
