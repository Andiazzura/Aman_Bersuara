import { IsString, IsOptional, PartialType } from 'class-validator';
import { CreateCurhatDto } from './create-curhat.dto';

export class UpdateCurhatDto extends PartialType(CreateCurhatDto) {
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
