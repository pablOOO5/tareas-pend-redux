import { Action } from "@ngrx/store";
import { Actions } from "@ngrx/store-devtools/src/reducer";

export const AGREGAR_TODO = '[TODO] Agregar todo';
export const TOGGLE_TODO = '[TODO] Modificar todo';
export const EDIT_TODO = '[TODO] Edit todo';
export const DELETE_TODO = '[TODO] Delete todo';
export const TOGGLE_ALL_TODO = '[TODO] Toggle all todo';
export const CLEAR_TODO = '[TODO] Clear all todo';

export class AgregarTodoActions implements Action{

    readonly type = AGREGAR_TODO;

    constructor( public texto: string ){}
}

export class ClearAllTodo implements Action{
    readonly type = CLEAR_TODO;
}

export class ToggleTodoActions implements Action{
    readonly type =  TOGGLE_TODO;

    constructor( public id:number ){}
}

export class EditTodoActions implements Action{
    readonly type = EDIT_TODO;

    constructor( public id:number, public texto: string ){}
}

export class ToggleAllTodoAction implements Action{
    readonly type = TOGGLE_ALL_TODO;

    constructor( public completado: boolean ){}
}

export class DeleteTodoActions implements Action{
    readonly type = DELETE_TODO;

    constructor( public id:number ){}
}

export type Acciones = AgregarTodoActions | ToggleTodoActions | 
    EditTodoActions | DeleteTodoActions | ToggleAllTodoAction | ClearAllTodo;