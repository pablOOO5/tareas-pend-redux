import * as fromFilter from './filter.action';
import { filtrosValido } from './filter.action';

const estadoInicial: fromFilter.filtrosValido = "todos";

export function filtrosReducer( state = estadoInicial, action: fromFilter.acciones ): filtrosValido{
    switch ( action.type ){
        case fromFilter.SET_FILTRO:
            return action.filtros;
        default:
            return state;
    }
        

}