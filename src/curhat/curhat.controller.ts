import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CurhatService } from './curhat.service';
import { CreateCurhatDto } from './dto/create-curhat.dto';
import { UpdateCurhatDto } from './dto/update-curhat.dto';

@Controller('curhat')
export class CurhatController {
  constructor(private readonly curhatService: CurhatService) {}

  @Post()
  create(@Body() createCurhatDto: CreateCurhatDto) {
    return this.curhatService.create(createCurhatDto);
  }

  @Get()
  findAll() {
    return this.curhatService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.curhatService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCurhatDto: UpdateCurhatDto) {
    return this.curhatService.update(id, updateCurhatDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.curhatService.remove(id);
  }
}
