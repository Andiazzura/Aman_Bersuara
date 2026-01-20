import { IsString, IsOptional } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
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
