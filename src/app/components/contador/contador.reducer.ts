import { INCREMENTAR, DECREMENTAR, ACTION_TYPE, MULTIPLICAR, DIVIDIR } from './contador.actions';

// Recibimos un estado actual y una acción que dirá que algo ha ocurrido para modificarlo
export function contadorReducer(state: number = 10, action: ACTION_TYPE){
 
    switch( action.type ){
        
        case INCREMENTAR:
            return state + 1; 

        case DECREMENTAR: 
            return state - 1;

        case MULTIPLICAR:
            return state * action.payload;    

        case DIVIDIR:
            return state / action.payload;

        default:
            return state;  
    }

}