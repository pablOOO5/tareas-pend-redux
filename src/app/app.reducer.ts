import { Todo } from "./todo/model/todo-model";

import * as fromTodo from './todo/reducer.todo';
import * as fromFilter from './filter/filter.reducer';

import * as fromfilterActions from './filter/filter.action'
import { ActionReducerMap } from "@ngrx/store";


export interface AppState{
    todos: Todo[];
    filtros: fromfilterActions.filtrosValido;
}

// constante que contiene todos los reducer para appmodule
export const AppReducer: ActionReducerMap<AppState> = {
    todos: fromTodo.todoReducer,
    filtros: fromFilter.filtrosReducer
}

