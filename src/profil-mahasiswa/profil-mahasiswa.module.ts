import { Module } from '@nestjs/common';
import { ProfilMahasiswaService } from './profil-mahasiswa.service';
import { ProfilMahasiswaController } from './profil-mahasiswa.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProfilMahasiswaController],
  providers: [ProfilMahasiswaService],
})
export class ProfilMahasiswaModule {}
