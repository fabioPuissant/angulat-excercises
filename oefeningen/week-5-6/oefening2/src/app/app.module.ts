import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompCComponent } from './comp-c/comp-c.component';
import { CompBComponent } from './comp-b/comp-b.component';

@NgModule({
  declarations: [
    AppComponent,
    CompAComponent,
    CompCComponent,
    CompBComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
