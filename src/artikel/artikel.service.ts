import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArtikelDto } from './dto/create-artikel.dto';
import { UpdateArtikelDto } from './dto/update-artikel.dto';

@Injectable()
export class ArtikelService {
  constructor(private prisma: PrismaService) {}

  async create(createArtikelDto: CreateArtikelDto) {
    try {
      return await this.prisma.article.create({
        data: {
          id_article: createArtikelDto.id_article,
          title: createArtikelDto.title,
          category: createArtikelDto.category,
          content: createArtikelDto.content,
        },
      });
    } catch (error) {
      if (error.code === 'P2002') {
        throw new BadRequestException('Article with this ID already exists');
      }
      throw error;
    }
  }

  async findAll() {
    return await this.prisma.article.findMany();
  }

  async findOne(id: string) {
    const article = await this.prisma.article.findUnique({
      where: { id_article: id },
    });

    if (!article) {
      throw new NotFoundException(`Article with ID ${id} not found`);
    }

    return article;
  }

  async update(id: string, updateArtikelDto: UpdateArtikelDto) {
    try {
      const article = await this.prisma.article.findUnique({
        where: { id_article: id },
      });

      if (!article) {
        throw new NotFoundException(`Article with ID ${id} not found`);
      }

      return await this.prisma.article.update({
        where: { id_article: id },
        data: updateArtikelDto,
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
      const article = await this.prisma.article.findUnique({
        where: { id_article: id },
      });

      if (!article) {
        throw new NotFoundException(`Article with ID ${id} not found`);
      }

      return await this.prisma.article.delete({
        where: { id_article: id },
      });
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw error;
    }
  }
}
