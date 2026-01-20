import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { LaporanModule } from './laporan/laporan.module';
import { UsersModule } from './users/users.module';
import { ArtikelModule } from './artikel/artikel.module';
import { CurhatModule } from './curhat/curhat.module';
import { RoleModule } from './role/role.module';
import { PsikologKonselorModule } from './psikolog-konselor/psikolog-konselor.module';
import { ProfilMahasiswaModule } from './profil-mahasiswa/profil-mahasiswa.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    PrismaModule,
    LaporanModule,
    UsersModule,
    ArtikelModule,
    CurhatModule,
    RoleModule,
    PsikologKonselorModule,
    ProfilMahasiswaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
