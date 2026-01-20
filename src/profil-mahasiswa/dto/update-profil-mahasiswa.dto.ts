import { IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilMahasiswaDto } from './create-profil-mahasiswa.dto';

export class UpdateProfilMahasiswaDto extends PartialType(CreateProfilMahasiswaDto) {
  @IsString()
  @IsOptional()
  name_mahasiswa?: string;

  @IsString()
  @IsOptional()
  no_telpon?: string;

  @IsString()
  @IsOptional()
  gender?: string;
}
