import { IsString, IsOptional, MinLength } from 'class-validator';

export class CreateArtikelDto {
  @IsString()
  @MinLength(1)
  id_article: string;

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
