import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../../app.reducer';
import { MULTIPLICAR, DIVIDIR } from '../contador.actions';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // Recibimos el contador desde el componente padre app.component
  public contador: number;

  // Mandamos desde el componente hijo hijo.component la propiedad cambioContador con un Event Emitter hacia el componente padre app.component
  // @Output() cambioContador = new EventEmitter<number>();

  constructor(private store: Store<AppState>) { 

  }

  ngOnInit() {

    // De esta manera obtenemos que la variable contador de este componente sea igual a la variable contador que tenemos en el estado  
    this.store.select('contador').subscribe(contador =>{
      this.contador = contador;
      console.log(contador);
    })

  }

  public multiplicar(){


    /*
    // Recibimos el número por el cual multiplicaremos el valor del contador 
    const accion = new MultiplicarAction(5);

    // Hacemos dispatch de la acción al store 
    this.store.dispatch(accion);

    // this.contador *=2;

    // Siempre debemos emitir el evento con la propiedad que estamos mandando como Output
    // this.cambioContador.emit(this.contador); */


    // Esto es para hacer lo mismo de arriba pero usando el estándar de la librería de ngrx
    
    this.store.dispatch( MULTIPLICAR( { numero: 2 } ) );


  }

  public dividir(){

    /*const accion = new DividirAction(5);
    this.store.dispatch(accion);


    // this.contador /=2;

    // this.cambioContador.emit(this.contador); */


    // Esto es para hacer lo mismo de arriba pero usando el estándar de la librería de ngrx
    
    this.store.dispatch( DIVIDIR( { numero: 2 } ) );


  }

  public resetNieto(nuevoContador){

    /*
    this.contador = nuevoContador; 

    // Siempre debemos emitir el evento con la propiedad que estamos mandando como Output
    // this.cambioContador.emit(this.contador); */
  }

}
