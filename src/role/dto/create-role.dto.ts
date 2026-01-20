import { IsString, MinLength } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  @MinLength(1)
  id_role: string;

  @IsString()
  @MinLength(2)
  name: string;
}
