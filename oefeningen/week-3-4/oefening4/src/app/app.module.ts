import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from './app.component';
import { PokemonComponent } from './pokemon/pokemon.component';

import { SelectService } from './select.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [SelectService],
  bootstrap: [AppComponent]
})
export class AppModule { }
