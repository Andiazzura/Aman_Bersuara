import { Module } from '@nestjs/common';
import { PsikologKonselorService } from './psikolog-konselor.service';
import { PsikologKonselorController } from './psikolog-konselor.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [PsikologKonselorController],
  providers: [PsikologKonselorService],
})
export class PsikologKonselorModule {}
