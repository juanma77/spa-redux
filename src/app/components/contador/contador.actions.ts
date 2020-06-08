import { Action } from '@ngrx/store';

// Acciones que queremos hacer en nuestra aplicación 
export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';
export const MULTIPLICAR = 'MULTIPLICAR';
export const DIVIDIR = 'DIVIDIR';
export const RESET = 'RESET';

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR; 
}

export class DecrementarAction implements Action {
    readonly type = DECREMENTAR; 
}

export class MultiplicarAction implements Action {
    readonly type = MULTIPLICAR; 

    // Este payload es el número que vamos a usar para multiplicarlo por el valor del contador 
    constructor( public payload: number ){

    }

}

export class DividirAction implements Action {
   
    readonly type = DIVIDIR; 

    constructor( public payload: number ){

    }
}

export class ResetAction implements Action {
    readonly type = RESET;
}

// Definimos el tipo de acción que acepta el reducer
export type ACTION_TYPE = IncrementarAction | DecrementarAction | MultiplicarAction | DividirAction | ResetAction; 
