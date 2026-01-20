import { IsString, IsOptional, PartialType } from 'class-validator';
import { CreateLaporanDto } from './create-laporan.dto';

export class UpdateLaporanDto extends PartialType(CreateLaporanDto) {
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
