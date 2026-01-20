import { IsString, IsOptional } from 'class-validator';

export class CreateLaporanDto {
  @IsString()
  id_laporan: string;

  @IsString()
  @IsOptional()
  id_user_pelapor?: string;

  @IsString()
  @IsOptional()
  kategori?: string;

  @IsString()
  @IsOptional()
  kronologi?: string;

  @IsString()
  @IsOptional()
  bukti_file?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  created_at?: string;
}
