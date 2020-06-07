import { Component } from '@angular/core';
import { Store, Action } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public contador: number;

  constructor( private store: Store<AppState>){
    //this.contador = 10; 

    // Decimos que cualquier cambio que pase en el state, lo imprima en la consola
    this.store.subscribe(state =>{

      // Aquí nos suscribimos a todos los cambios que haya en el state y se reflejan en pantalla 
      this.contador = state.contador; 
      //console.log(state);
    });

  }

  public incrementar(){

    // Este tipo debe de ser igual al nombre que está en el reducer 
    const accion: Action = {
      type: 'INCREMENTAR'
    };

    // La accion siempre la debemos de mandar al store con el dispatch; aquí se dice que disparamos la acción con un dispatch
    this.store.dispatch(accion);

    //this.contador++;

  }

  public decrementar(){

    const accion: Action = {
      type: 'DECREMENTAR'
    };

    this.store.dispatch(accion);

    //this.contador--; 

  }

}

interface AppState{
  contador: number; 
}
