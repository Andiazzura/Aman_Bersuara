import { IsString, IsOptional, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateCurhatDto } from './create-curhat.dto';

export class UpdateCurhatDto extends PartialType(CreateCurhatDto) {
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
