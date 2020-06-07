import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  // Recibimos el contador desde el componente padre app.component
  @Input() contador: number;


  // Mandamos desde el componente hijo hijo.component la propiedad cambioContador con un Event Emitter hacia el componente padre app.component
  @Output() cambioContador = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public multiplicar(){
    this.contador *=2;

    // Siempre debemos emitir el evento con la propiedad que estamos mandando como Output
    this.cambioContador.emit(this.contador); 
  }

  public dividir(){
    this.contador /=2;

    this.cambioContador.emit(this.contador); 

  }

  public resetNieto(nuevoContador){
    this.contador = nuevoContador; 

    // Siempre debemos emitir el evento con la propiedad que estamos mandando como Output
    this.cambioContador.emit(this.contador);
  }

}
