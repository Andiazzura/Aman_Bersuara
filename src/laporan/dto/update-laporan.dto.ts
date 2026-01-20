import { IsString, IsOptional, MinLength } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateLaporanDto } from './create-laporan.dto';

export class UpdateLaporanDto extends PartialType(CreateLaporanDto) {
  @IsString()
  @IsOptional()
  id_user_reporter?: string;

  @IsString()
  @IsOptional()
  category?: string;

  @IsString()
  @IsOptional()
  @MinLength(10)
  chronology?: string;

  @IsString()
  @IsOptional()
  file_evidence?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  created_at?: string;
}
