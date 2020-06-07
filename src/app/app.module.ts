import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HijoComponent } from './components/contador/hijo/hijo.component';
import { NietoComponent } from './components/contador/nieto/nieto.component';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './components/contador/contador.reducer';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    // El nombre del store es "contador"
    StoreModule.forRoot({ contador: contadorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
