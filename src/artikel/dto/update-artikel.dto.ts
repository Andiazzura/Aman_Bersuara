import { IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateArtikelDto } from './create-artikel.dto';

export class UpdateArtikelDto extends PartialType(CreateArtikelDto) {
  @IsString()
  @IsOptional()
  judul?: string;

  @IsString()
  @IsOptional()
  kategori?: string;

  @IsString()
  @IsOptional()
  isi?: string;
}
