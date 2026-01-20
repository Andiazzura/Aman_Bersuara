import { IsString, IsOptional, PartialType } from 'class-validator';
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
