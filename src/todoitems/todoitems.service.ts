import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { CreateTodoitemDto } from './dto/create-todoitem.dto';
import { UpdateTodoitemDto } from './dto/update-todoitem.dto';
import { TodoItem, TodoItemDocument } from './schemas/todoitems.schema';

@Injectable()
export class TodoitemsService {
  constructor(
    @InjectModel(TodoItem.name)
    private readonly todoItemModel: Model<TodoItemDocument>,
  ) {}

  async create(createTodoitemDto: CreateTodoitemDto): Promise<TodoItem> {
    return this.todoItemModel.create(createTodoitemDto);
  }

  async findAll(): Promise<TodoItem[]> {
    return this.todoItemModel.find().exec();
  }

  async findOne(id: string): Promise<TodoItem> {
    return this.todoItemModel.findOne({ _id: id }).exec();
  }

  async update(
    id: string,
    updateTodoitemDto: UpdateTodoitemDto,
  ): Promise<TodoItem> {
    return this.todoItemModel
      .findOneAndUpdate({ _id: id }, updateTodoitemDto, {
        returnDocument: 'after',
      })
      .exec();
  }

  async remove(id: string): Promise<TodoItem> {
    const deleted = await this.todoItemModel
      .findByIdAndRemove({ _id: id })
      .exec();
    return deleted;
  }
}
