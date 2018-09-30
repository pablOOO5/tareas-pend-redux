

import * as fromtodo from "./actions.todo";
import { Todo } from './model/todo-model';
import { TOGGLE_ALL_TODO } from './actions.todo';
import { State } from '@ngrx/store';

const estado1 = new Todo( 'Vencer a Vegeta' );
const estado2 = new Todo( 'Hablar con Picoro' );

const estadoInicial : Todo[] = [ estado1, estado2 ];

export function todoReducer( state = estadoInicial, action: fromtodo.Acciones ): Todo[]{

    switch( action.type ){

        case fromtodo.AGREGAR_TODO:
            //console.log( "estado inicial:" );
            const todo = new Todo( action.texto );
            return [...state, todo]; // clonamos el state y agregamos el todo

        case fromtodo.TOGGLE_TODO:
            return state.map( todoEdit =>{

                // Voy a retornar un nuevo objeto exceptuando completado en caso
                // de encontrar el mismo id. Sino no hago nada.
                if(todoEdit.id === action.id){
                    return {
                    ...todoEdit,
                    completado: !todoEdit.completado
                    }
                }else{
                    // Devuelvo el mismo elemento xq no va a cambiar
                    return todoEdit;
                }
            });
            case fromtodo.EDIT_TODO:
                return state.map( editTodo => {
                    console.log(' reducer:  ', editTodo);
                    if(editTodo.id === action.id){
                        console.log( 'ESTOY DENTRO: ', editTodo.id );
                        return{
                            ...editTodo,
                            texto: action.texto                          
                        }
                    }else{
                        return editTodo;
                    }
                })

            case fromtodo.DELETE_TODO:
                return state.filter( d => d.id != action.id );

            case fromtodo.TOGGLE_ALL_TODO:
                return state.map( state => {
                    return {
                        ...state,
                        completado: action.completado
                    }
                } )
            case fromtodo.CLEAR_TODO:
            return state.filter( d => !d.completado );

        default:
            return state;
    }

}