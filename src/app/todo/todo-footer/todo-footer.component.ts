import { Component, OnInit } from '@angular/core';
import { filtrosValido, SetFilterAction } from '../../filter/filter.action';
import { AppState } from '../../app.reducer';
import { Store } from '@ngrx/store';
import { Todo } from '../model/todo-model';
import { ClearAllTodo } from '../actions.todo';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {

  filtrosValidos: filtrosValido [] = ['todos', 'pendientes', 'completados'];
  filtroActual: filtrosValido;

  pendientes:number;

  constructor( private store : Store<AppState> ) { }

  ngOnInit() {

    this.store.subscribe( filtro =>{

      this.filtroActual = filtro.filtros;
      this.pendientesCount( filtro.todos );
    
    });

  }

  selectFilter( filtro: filtrosValido ){
    const accion = new SetFilterAction( filtro );
    this.store.dispatch( accion );
  }

  pendientesCount( todo: Todo[] ){
    this.pendientes = todo.filter( todo=> !todo.completado ).length;
  }

  limpiar(){
    const accion = new ClearAllTodo();
    this.store.dispatch(accion);
  }

}
