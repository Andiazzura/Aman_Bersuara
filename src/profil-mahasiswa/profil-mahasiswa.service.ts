import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateProfilMahasiswaDto } from './dto/create-profil-mahasiswa.dto';
import { UpdateProfilMahasiswaDto } from './dto/update-profil-mahasiswa.dto';

@Injectable()
export class ProfilMahasiswaService {
  constructor(private prisma: PrismaService) {}

  create(createProfilMahasiswaDto: CreateProfilMahasiswaDto) {
    return this.prisma.profileMahasiswa.create({
      data: createProfilMahasiswaDto,
    });
  }

  findAll() {
    return this.prisma.profileMahasiswa.findMany();
  }

  findOne(id: string) {
    return this.prisma.profileMahasiswa.findUnique({
      where: { id_user: id },
    });
  }

  update(id: string, updateProfilMahasiswaDto: UpdateProfilMahasiswaDto) {
    return this.prisma.profileMahasiswa.update({
      where: { id_user: id },
      data: updateProfilMahasiswaDto,
    });
  }

  remove(id: string) {
    return this.prisma.profileMahasiswa.delete({
      where: { id_user: id },
    });
  }
}
