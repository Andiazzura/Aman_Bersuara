import { IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreatePsikologKonselorDto } from './create-psikolog-konselor.dto';

export class UpdatePsikologKonselorDto extends PartialType(CreatePsikologKonselorDto) {
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
