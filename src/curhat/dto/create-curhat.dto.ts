import { IsString, IsOptional } from 'class-validator';

export class CreateCurhatDto {
  @IsString()
  id_curhat: string;

  @IsString()
  @IsOptional()
  id_user_pengguna?: string;

  @IsString()
  @IsOptional()
  id_psikolog?: string;

  @IsString()
  @IsOptional()
  pesan?: string;

  @IsString()
  @IsOptional()
  timstamp?: string;
}
