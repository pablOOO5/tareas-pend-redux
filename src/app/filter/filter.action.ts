import { Action } from "@ngrx/store";


export const SET_FILTRO = '[Fiter] set filter ';

export type filtrosValido = 'todos' | 'completados' | 'pendientes';

export class SetFilterAction implements Action{
    readonly type = SET_FILTRO;

    constructor( public filtros: filtrosValido ){}
}

export type acciones = SetFilterAction;