import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { TodoitemsService } from './todoitems.service';
import { CreateTodoitemDto } from './dto/create-todoitem.dto';
import { UpdateTodoitemDto } from './dto/update-todoitem.dto';

@Controller('todos')
export class TodoitemsController {
  constructor(private readonly todoitemsService: TodoitemsService) {}

  @Post()
  create(@Body() createTodoitemDto: CreateTodoitemDto) {
    return this.todoitemsService.create(createTodoitemDto);
  }

  @Get()
  findAll() {
    return this.todoitemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.todoitemsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTodoitemDto: UpdateTodoitemDto,
  ) {
    return this.todoitemsService.update(id, updateTodoitemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.todoitemsService.remove(id);
  }
}
