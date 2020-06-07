import { Action } from '@ngrx/store';

// Acciones que queremos hacer en nuestra aplicación 
export const INCREMENTAR = 'INCREMENTAR';
export const DECREMENTAR = 'DECREMENTAR';

export class IncrementarAction implements Action{
    readonly type = INCREMENTAR; 
}

export class DecrementarAction implements Action{
    readonly type = DECREMENTAR; 
}
