import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HijoComponent } from './components/contador/hijo/hijo.component';
import { NietoComponent } from './components/contador/nieto/nieto.component';

// Ngrx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './components/contador/contador.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HijoComponent,
    NietoComponent
  ],
  imports: [
    BrowserModule,
    // El nombre del store es "contador"
    StoreModule.forRoot({ contador: contadorReducer }),

    // Para poder usar la extensión de Devtools en Chrome
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Con esto decimos que el estado mantenga los útlimos 25 estados

      // Para que los usuarios no manipulen el estado en producción 
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
