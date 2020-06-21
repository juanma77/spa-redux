/*import { INCREMENTAR, DECREMENTAR, ACTION_TYPE, MULTIPLICAR, DIVIDIR, RESET, IncrementarAction, DecrementarAction } from './contador.actions';
import { createReducer, on, createAction } from '@ngrx/store';
import { create } from 'domain';

// Para optimizar los import podemos usar el "*"; y usar "fromContador." antes de INCREMENTAR, DECREMENTAR, MULTIPLICAR, etc. y de ACTION_TYPE
// import * as fromContador from './contador.actions';

// Recibimos un estado actual y una acción que dirá que algo ha ocurrido para modificarlo
/*export function contadorReducer(state: number = 10, action: ACTION_TYPE){
 
    switch( action.type ){
        
        case INCREMENTAR:
            return state + 1; 

        case DECREMENTAR: 
            return state - 1;

        case MULTIPLICAR:
            return state * action.payload;    

        case DIVIDIR:
            return state / action.payload;

        case RESET: 
            return 0;    

        default:
            return state;  
    }

} */


// Esta forma es otra manera de hacer lo de arriba sin utilizar el switch sino usar los métodos propios de la librería ngrx 

import { createReducer , on } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR, MULTIPLICAR, DIVIDIR, RESET } from './contador.actions';

// Definimos un state inicial 
export const initialState = 20;

// Creamos una función privada para crear el reducer que recibe el state actual y las acción; las acciones de multiplicar y dividir deben tener la funcnión callback con el state y el numero como argumentos pues reciben un payload 
const _contadorReducer = createReducer(initialState,
    on(INCREMENTAR, state => state + 1),
    on(DECREMENTAR, state => state - 1),
    on(MULTIPLICAR, ( state, { numero } ) => state * numero ),
    on(DIVIDIR, ( state, { numero } ) => state / numero ),
    on(RESET, state => state = 20)
);

// Exportamos una nueva función donde utilizamos el reducer que acabamos de crear arriba 
export function contadorReducer( state, action ){
    return _contadorReducer( state, action );
}