import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../todo/model/todo-model';

import * as fromFilter from './filter.action';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[], filtro: fromFilter.filtrosValido): Todo[] {
    switch( filtro ){
      case 'pendientes':
        return todos.filter( todo => !todo.completado );
      case 'completados':
        return todos.filter( todo => todo.completado ); 
      default:
        return todos;
    }
  }

}
