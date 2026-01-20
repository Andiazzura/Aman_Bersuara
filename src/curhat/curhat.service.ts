import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCurhatDto } from './dto/create-curhat.dto';
import { UpdateCurhatDto } from './dto/update-curhat.dto';

@Injectable()
export class CurhatService {
  constructor(private prisma: PrismaService) {}

  async create(createCurhatDto: CreateCurhatDto) {
    try {
      return await this.prisma.curhat.create({
        data: {
          id_curhat: createCurhatDto.id_curhat,
          id_user: createCurhatDto.id_user,
          id_psychologist: createCurhatDto.id_psychologist,
          message: createCurhatDto.message,
          timstamp: createCurhatDto.timstamp,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Curhat with this ID already exists');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.curhat.findMany();
  }

  async findOne(id: string) {
    const curhat = await this.prisma.curhat.findUnique({
      where: { id_curhat: id },
    });

    if (!curhat) {
      throw new NotFoundException(`Curhat with ID ${id} not found`);
    }

    return curhat;
  }

  async update(id: string, updateCurhatDto: UpdateCurhatDto) {
    try {
      const curhat = await this.prisma.curhat.findUnique({
        where: { id_curhat: id },
      });

      if (!curhat) {
        throw new NotFoundException(`Curhat with ID ${id} not found`);
      }

      return await this.prisma.curhat.update({
        where: { id_curhat: id },
        data: updateCurhatDto,
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }

  async remove(id: string) {
    try {
      const curhat = await this.prisma.curhat.findUnique({
        where: { id_curhat: id },
      });

      if (!curhat) {
        throw new NotFoundException(`Curhat with ID ${id} not found`);
      }

      return await this.prisma.curhat.delete({
        where: { id_curhat: id },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}
