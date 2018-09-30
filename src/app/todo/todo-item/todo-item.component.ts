import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Todo } from '../model/todo-model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../app.reducer';
import { ToggleTodoActions, EditTodoActions, DeleteTodoActions } from '../actions.todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})
export class TodoItemComponent implements OnInit {

  checkControl: FormControl;
  txtInput: FormControl;

  @ViewChild('txtInputRef') txtInputRef:  ElementRef;

  editando: boolean;

  @Input() todo: Todo;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {

    this.checkControl = new FormControl( this.todo.completado );
    this.txtInput = new FormControl( this.todo.texto, Validators.required );

    this.checkControl.valueChanges.subscribe(valor=>{
      const accion = new ToggleTodoActions( this.todo.id );
      this.store.dispatch( accion );
      //console.log(valor);
    })

    //console.log(this.todo);
  }

  editar(){
    this.editando = true;

    setTimeout(()=>{
      this.txtInputRef.nativeElement.select();
    }, 1)
  }

  perderFoco(){
    this.editando = false;

    if(this.txtInput.invalid){
      return;
    }

    if( this.txtInput.value === this.todo.texto ){
      return;
    }

    //console.log( 'todo: ', this.todo );

    const accionEdit = new EditTodoActions(this.todo.id, this.txtInput.value);
    console.log( 'new: ', accionEdit )
    this.store.dispatch( accionEdit );
  }

  deleteTodo(){
    const accion = new DeleteTodoActions( this.todo.id );
    this.store.dispatch( accion );
  }

}
