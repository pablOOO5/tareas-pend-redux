import { Component, OnInit } from '@angular/core';
import {  Validators, FormControl } from '@angular/forms';

import * as fromTodo from "../actions.todo";
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})
export class TodoAddComponent implements OnInit {

  txtInput : FormControl;

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.txtInput = new FormControl( '', Validators.required );
  }

  agregarTodo(){
    
    if( this.txtInput.invalid ){
      return;
    }

    const accion = new fromTodo.AgregarTodoActions( this.txtInput.value );
    this.store.dispatch( accion );

    this.txtInput.setValue('');

    // console.log(this.txtInput.value);
    // console.log(this.txtInput.valid);
  }

}
