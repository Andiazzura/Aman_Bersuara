import { IsString, IsOptional, MinLength } from 'class-validator';

export class CreateLaporanDto {
  @IsString()
  @MinLength(1)
  id_report: string;

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
