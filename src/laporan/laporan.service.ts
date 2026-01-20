import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateLaporanDto } from './dto/create-laporan.dto';
import { UpdateLaporanDto } from './dto/update-laporan.dto';

@Injectable()
export class LaporanService {
  constructor(private prisma: PrismaService) {}

  async create(createLaporanDto: CreateLaporanDto) {
    try {
      return await this.prisma.laporan.create({
        data: {
          id_report: createLaporanDto.id_report,
          id_user_reporter: createLaporanDto.id_user_reporter,
          category: createLaporanDto.category,
          chronology: createLaporanDto.chronology,
          file_evidence: createLaporanDto.file_evidence,
          status: createLaporanDto.status || 'pending',
          created_at: createLaporanDto.created_at || new Date().toISOString(),
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Report with this ID already exists');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.report.findMany({
      orderBy: {
        created_at: 'desc',
      },
    });
  }

  async findOne(id: string) {
    const report = await this.prisma.report.findUnique({
      where: { id_report: id },
    });

    if (!report) {
      throw new NotFoundException(`Report with ID ${id} not found`);
    }

    return report;
  }

  async update(id: string, updateLaporanDto: UpdateLaporanDto) {
    try {
      const report = await this.prisma.report.findUnique({
        where: { id_report: id },
      });

      if (!report) {
        throw new NotFoundException(`Report with ID ${id} not found`);
      }

      return await this.prisma.report.update({
        where: { id_report: id },
        data: updateLaporanDto,
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
      const report = await this.prisma.report.findUnique({
        where: { id_report: id },
      });

      if (!report) {
        throw new NotFoundException(`Report with ID ${id} not found`);
      }

      return await this.prisma.report.delete({
        where: { id_report: id },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}
