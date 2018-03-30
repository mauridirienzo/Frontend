import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '././login/login.component';
import { HomeComponent } from '././home/home.component';
import { Tab1Component } from './home/tabs/tab1/tab1.component';
import { Tab2Component } from './home/tabs/tab2/tab2.component';
import { Tab3Component } from './home/tabs/tab3/tab3.component';
import { Tab4Component } from './home/tabs/tab4/tab4.component';
import { Tab5Component } from './home/tabs/tab5/tab5.component';

const appRoutes: Routes = [
  {
    path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'home/tab1', component: Tab1Component },
  { path: 'home/tab2', component: Tab2Component },
  { path: 'home/tab3', component: Tab3Component },
  { path: 'home/tab4', component: Tab4Component },
  { path: 'home/tab5', component: Tab5Component }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
