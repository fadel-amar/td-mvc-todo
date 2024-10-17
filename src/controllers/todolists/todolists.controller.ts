import { Body, Controller, Get, Param, Post, Render } from '@nestjs/common';
import { TodolistsService } from 'src/models/todolists/todolists.service';
import { CreateTodolist } from '../dto/create-todolist.dto';


@Controller('todolists')
export class TodolistsController {
    constructor(private readonly todolistsService: TodolistsService) { }

    @Post()
    @Render('todolist')
    create(@Body() body: CreateTodolist) {
        let createdTodolist = this.todolistsService.create(body.name);
        return { todolist: createdTodolist };
    }

    @Get()
    @Render('todolists')
    findAll() {
        return { todolists: this.todolistsService.getAll() };
    }

    @Get(':id')
    @Render('todolist')
    findOne(@Param('id') id: string) {
        return { todolist: this.todolistsService.getOne(+id) };
    }

    @Post(':id')
    @Render('todolist')
    update(@Param('id') id: string, @Body() body: CreateTodolist) {
        return { todolist: this.todolistsService.update(+id, body.name) };
    }
}
