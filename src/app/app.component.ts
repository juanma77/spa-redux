import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { INCREMENTAR, DECREMENTAR } from './components/contador/contador.actions';
import { AppState } from './app.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  public contador: number;

  // Definimos el tipo de estado que manejará nuestra aplicación
  constructor( private store: Store<AppState> ){

    // Nos suscribimos a los cambios que sucedan en el store; decimos que cualquier cambio que pase en el state, lo imprima en la consola. El select nos permite seleccionar el nodo que nos interesa de entre todos los que están en nuestras ramificaciones del estado 
    this.store.select('contador').subscribe(contador =>{

      // Aquí nos suscribimos a todos los cambios que haya en el state y se reflejan en pantalla 
      this.contador = contador; 
    });

  }

  public incrementar(){
    /*
    // Declaramos el tipo de acción que queremos utilizar 
    const accion = new IncrementarAction();

    // La accion siempre la debemos de mandar al store con el dispatch; aquí se dice que disparamos la acción con un dispatch
    this.store.dispatch(accion); */


    // Esto es para hacer lo de arriba pero usando el estándar de la librería de ngrx 
    this.store.dispatch( INCREMENTAR() );


  }

  public decrementar(){

    /*
    const accion = new DecrementarAction();
    this.store.dispatch(accion);*/
    
    // Esto es para hacer lo de arriba pero usando el estándar de la librería de ngrx 
    this.store.dispatch( DECREMENTAR() );



  }

}
