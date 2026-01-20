import { IsString, IsOptional } from 'class-validator';

export class CreateProfilMahasiswaDto {
  @IsString()
  id_user: string;

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
