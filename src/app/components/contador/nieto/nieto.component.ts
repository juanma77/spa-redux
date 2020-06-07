import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.css']
})
export class NietoComponent implements OnInit {

  // Recibimos la propiedad contador desde el componente hijo hijo.component
  @Input() contador: number; 

  // Emitimos la propiedad contadorCambio desde nieto.component 
  @Output() contadorCambio = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  public reset(){
    this.contador = 0; 

    // Siempre debemos emitir luego de poner el Otput
    this.contadorCambio.emit(0); 
  }

}
