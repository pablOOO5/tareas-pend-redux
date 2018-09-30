import { Component, OnInit } from '@angular/core';
import { Store, State } from '@ngrx/store';
import { Todo } from '../model/todo-model';
import { AppState } from '../../app.reducer';

import * as fromFilter from '../../filter/filter.action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styles: []
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = [];
  filtro: fromFilter.filtrosValido;

  constructor( private store : Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe( state => {

      this.todos = state.todos;
      this.filtro = state.filtros;
      //console.log(state.todos);  
    });

  }

}
