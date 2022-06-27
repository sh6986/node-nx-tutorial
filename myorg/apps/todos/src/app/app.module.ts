import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodosService } from './todos/todos.service';
import { AuthModule } from '@myorg/auth';

@Module({
  imports: [AuthModule],
  controllers: [AppController],
  providers: [AppService, TodosService],
})
export class AppModule {}