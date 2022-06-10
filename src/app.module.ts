import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoitemsModule } from './todoitems/todoitems.module';

const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost:27017/test';

@Module({
  imports: [MongooseModule.forRoot(databaseUrl), TodoitemsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
