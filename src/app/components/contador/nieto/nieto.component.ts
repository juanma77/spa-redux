import { Component, OnInit } from '@angular/core';
import { AppState } from '../../../app.reducer';
import { Store } from '@ngrx/store';
import { RESET } from '../contador.actions';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  public contador: number; 

  // Recibimos la propiedad contador desde el componente hijo hijo.component
  // @Input() contador: number; 

  // Emitimos la propiedad contadorCambio desde nieto.component 
  // @Output() contadorCambio = new EventEmitter<number>();

  constructor( private store: Store<AppState> ) {
    
    this.store.select('contador').subscribe(contador =>{
      this.contador = contador; 
    });

  }

  ngOnInit() {
  }

  public reset(){

    /*
    const accion = new ResetAction();
    this.store.dispatch(accion);

    // this.contador = 0; 

    // Siempre debemos emitir luego de poner el Otput
    // this.contadorCambio.emit(0); */ 

    
    // Esto es para hacer lo mismo de arriba pero usando el estándar de la librería ngrx 
    this.store.dispatch(RESET()); 

  }

}
