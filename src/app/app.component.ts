import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './components/contador/contador.actions';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public contador: number;

  constructor( private store: Store<AppState>){

    // Decimos que cualquier cambio que pase en el state, lo imprima en la consola
    this.store.select('contador').subscribe(contador =>{

      // Aquí nos suscribimos a todos los cambios que haya en el state y se reflejan en pantalla 
      this.contador = contador; 
    });

  }

  public incrementar(){

    // Declaramos el tipo de acción que queremos utilizar 
    const accion = new IncrementarAction();

    // La accion siempre la debemos de mandar al store con el dispatch; aquí se dice que disparamos la acción con un dispatch
    this.store.dispatch(accion);

  }

  public decrementar(){

    const accion = new DecrementarAction();
    this.store.dispatch(accion);

  }

}
