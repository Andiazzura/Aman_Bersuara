import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProfilMahasiswaService } from './profil-mahasiswa.service';
import { CreateProfilMahasiswaDto } from './dto/create-profil-mahasiswa.dto';
import { UpdateProfilMahasiswaDto } from './dto/update-profil-mahasiswa.dto';

@Controller('profil-mahasiswa')
export class ProfilMahasiswaController {
  constructor(private readonly profilMahasiswaService: ProfilMahasiswaService) {}

  @Post()
  create(@Body() createProfilMahasiswaDto: CreateProfilMahasiswaDto) {
    return this.profilMahasiswaService.create(createProfilMahasiswaDto);
  }

  @Get()
  findAll() {
    return this.profilMahasiswaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.profilMahasiswaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProfilMahasiswaDto: UpdateProfilMahasiswaDto) {
    return this.profilMahasiswaService.update(id, updateProfilMahasiswaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.profilMahasiswaService.remove(id);
  }
}
