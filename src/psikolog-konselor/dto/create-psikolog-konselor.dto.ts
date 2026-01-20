import { IsString, IsOptional } from 'class-validator';

export class CreatePsikologKonselorDto {
  @IsString()
  id_user: string;

  @IsString()
  @IsOptional()
  name_psikolog?: string;

  @IsString()
  @IsOptional()
  jadwal_kerja?: string;

  @IsString()
  @IsOptional()
  status?: string;

  @IsString()
  @IsOptional()
  pengalaman_kerja?: string;

  @IsString()
  @IsOptional()
  spesialisasi?: string;
}
