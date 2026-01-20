import { IsString, IsOptional, MinLength } from 'class-validator';

export class CreateCurhatDto {
  @IsString()
  @MinLength(1)
  id_curhat: string;

  @IsString()
  @IsOptional()
  id_user?: string;

  @IsString()
  @IsOptional()
  id_psychologist?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  message?: string;

  @IsString()
  @IsOptional()
  timstamp?: string;
}
