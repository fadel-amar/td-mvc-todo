import { Module } from '@nestjs/common';
import { TodolistsController } from './controllers/todolists/todolists.controller';
import { TodolistsService } from './models/todolists/todolists.service';

@Module({
  imports: [],
  controllers: [TodolistsController],
  providers: [TodolistsService],
})
export class AppModule {}
