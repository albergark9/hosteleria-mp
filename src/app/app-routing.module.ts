import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SevillanoComponent } from './sevillano/sevillano.component';

const routes: Routes = [
  { path: 'sevillano', component: SevillanoComponent},
  { path: 'landing-page', component: LandingPageComponent},
  { path: '', component: LandingPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
