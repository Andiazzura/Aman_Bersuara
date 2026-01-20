import { IsString, IsOptional, MinLength } from 'class-validator';

export class CreatePsikologKonselorDto {
  @IsString()
  @MinLength(1)
  id_user: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  name_psychologist?: string;

  @IsString()
  @IsOptional()
  jwork_schedule?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  @MinLength(5)
  work_experiance?: string;

  @IsString()
  @IsOptional()
  specialization?: string;
}
