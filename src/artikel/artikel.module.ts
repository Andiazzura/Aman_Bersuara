import { Module } from '@nestjs/common';
import { ArtikelService } from './artikel.service';
import { ArtikelController } from './artikel.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ArtikelController],
  providers: [ArtikelService],
})
export class ArtikelModule {}
