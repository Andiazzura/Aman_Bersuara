import { IsString, IsOptional, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateArtikelDto } from './create-artikel.dto';

export class UpdateArtikelDto extends PartialType(CreateArtikelDto) {
  @IsString()
  @IsOptional()
  @MinLength(5)
  title?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  content?: string;
}
