import { IsString, IsOptional } from 'class-validator';

export class CreateRoleDto {
  @IsString()
  id_role: string;

  @IsString()
  @IsOptional()
  name?: string;
}
