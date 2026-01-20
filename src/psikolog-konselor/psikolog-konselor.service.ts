import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePsikologKonselorDto } from './dto/create-psikolog-konselor.dto';
import { UpdatePsikologKonselorDto } from './dto/update-psikolog-konselor.dto';

@Injectable()
export class PsikologKonselorService {
  constructor(private prisma: PrismaService) {}

  create(createPsikologKonselorDto: CreatePsikologKonselorDto) {
    return this.prisma.counselorpsychologist.create({
      data: createPsikologKonselorDto,
    });
  }

  findAll() {
    return this.prisma.counselorpsychologist.findMany();
  }

  findOne(id: string) {
    return this.prisma.counselorpsychologist.findUnique({
      where: { id_user: id },
    });
  }

  update(id: string, updatePsikologKonselorDto: UpdatePsikologKonselorDto) {
    return this.prisma.counselorpsychologist.update({
      where: { id_user: id },
      data: updatePsikologKonselorDto,
    });
  }

  remove(id: string) {
    return this.prisma.counselorpsychologist.delete({
      where: { id_user: id },
    });
  }
}
