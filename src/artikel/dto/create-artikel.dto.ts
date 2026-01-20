import { IsString, IsOptional } from 'class-validator';

export class CreateArtikelDto {
  @IsString()
  id_artikel: string;

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
