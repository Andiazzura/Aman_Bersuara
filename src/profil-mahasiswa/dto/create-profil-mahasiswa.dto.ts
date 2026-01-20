import { IsString, IsOptional, MinLength, Matches } from 'class-validator';

export class CreateProfilMahasiswaDto {
  @IsString()
  @MinLength(1)
  id_user: string;

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
