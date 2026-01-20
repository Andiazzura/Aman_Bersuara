import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PsikologKonselorService } from './psikolog-konselor.service';
import { CreatePsikologKonselorDto } from './dto/create-psikolog-konselor.dto';
import { UpdatePsikologKonselorDto } from './dto/update-psikolog-konselor.dto';

@Controller('psikolog-konselor')
export class PsikologKonselorController {
  constructor(private readonly psikologKonselorService: PsikologKonselorService) {}

  @Post()
  create(@Body() createPsikologKonselorDto: CreatePsikologKonselorDto) {
    return this.psikologKonselorService.create(createPsikologKonselorDto);
  }

  @Get()
  findAll() {
    return this.psikologKonselorService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.psikologKonselorService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePsikologKonselorDto: UpdatePsikologKonselorDto) {
    return this.psikologKonselorService.update(id, updatePsikologKonselorDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.psikologKonselorService.remove(id);
  }
}
