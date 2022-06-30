import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SevillanoComponent } from './sevillano/sevillano.component';

import { SevillanoService } from './sevillano/sevillano.service';
@NgModule({
  declarations: [
    AppComponent,
    SevillanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SevillanoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
