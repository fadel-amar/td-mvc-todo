import { Injectable } from '@nestjs/common';
import { Todolist } from './entities/todolist';


@Injectable()
export class TodolistsService {
    private static todolists: Todolist[] = [];

    create(name: string): Todolist {
        let todolist = new Todolist();
        todolist.id = Math.floor(Math.random() * 1000);
        todolist.name = name;
        todolist.elements = [];


        TodolistsService.todolists.push(todolist);

        return todolist;
    }


    getAll(): Todolist[] {
        return TodolistsService.todolists;
    }

    getOne(id: number): Todolist {
        let todolist = TodolistsService.todolists.find(list => list.id === id);

        if (!todolist) {
            // throw new Error('No todolist found for id ' + id);
            throw new Error(`No todolist found for id ${id}`);
        }

        return todolist;
    }

    update(id: number, name: string): Todolist {
        let todolist = TodolistsService.todolists.find(list => list.id === id);

        if (!todolist) {
            throw new Error(`No todolist found for id ${id}`);
        }

        todolist.name = name;

        return todolist;
    }
}
