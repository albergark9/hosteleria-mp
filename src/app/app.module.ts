import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SevillanoComponent } from './sevillano/sevillano.component';

import { SevillanoService } from './sevillano/sevillano.service';
import { AppService } from './app.service';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SevillanoComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppService,SevillanoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
