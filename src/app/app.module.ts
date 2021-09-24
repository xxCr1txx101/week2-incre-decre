import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IncreDecreComponent } from './incre-decre/incre-decre.component';

@NgModule({
  declarations: [
    AppComponent,
    IncreDecreComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
