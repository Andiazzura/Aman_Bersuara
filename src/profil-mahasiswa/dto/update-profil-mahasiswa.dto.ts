import { IsString, IsOptional, MinLength, Matches } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProfilMahasiswaDto } from './create-profil-mahasiswa.dto';

export class UpdateProfilMahasiswaDto extends PartialType(CreateProfilMahasiswaDto) {
  @IsString()
  @IsOptional()
  @MinLength(3)
  name_mahasiswa?: string;

  @IsString()
  @IsOptional()
  @Matches(/^[0-9+\-\s()]*$/, { message: 'no_telphone must be a valid phone number' })
  no_telphone?: string;

  @IsString()
  @IsOptional()
  gender?: string;
}
