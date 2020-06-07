import { Action } from '@ngrx/store';

// Recibimos un estado actual y una acción que dirá que algo ha ocurrido para modificarlo
export function contadorReducer(state: number = 10, action: Action){
 
    switch( action.type ){
        
        case 'INCREMENTAR':
            return state + 1; 

        case 'DECREMENTAR': 
            return state - 1;

        default:
            return state;  
    }

}