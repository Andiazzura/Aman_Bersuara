import { Module } from '@nestjs/common';
import { CurhatService } from './curhat.service';
import { CurhatController } from './curhat.controller';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CurhatController],
  providers: [CurhatService],
})
export class CurhatModule {}
