import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '././login/login.component';
import { HomeComponent } from '././home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthenticationService } from './services/authentication-service.service';
import { DataService} from './services/global-data.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddHttpHeaderInterceptor } from './services/AddHttpHeaderInterceptor';
import { FormsModule } from '@angular/forms';
import { Tab1Component } from './home/tabs/tab1/tab1.component';
import { Tab2Component } from './home/tabs/tab2/tab2.component';
import { Tab3Component } from './home/tabs/tab3/tab3.component';
import { Tab4Component } from './home/tabs/tab4/tab4.component';
import { Tab5Component } from './home/tabs/tab5/tab5.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    LoginComponent,
    HomeComponent,
    AppComponent,
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab4Component,
    Tab5Component
   ],

  imports: [
    BrowserModule,
    NoopAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatTabsModule,
    CommonModule,
    HttpClientModule,
    NgbModule,
    MatToolbarModule],

  providers: [AuthenticationService, DataService,
    { provide: HTTP_INTERCEPTORS, useClass: AddHttpHeaderInterceptor, multi: true }],
  bootstrap: [AppComponent]
})

export class AppModule {

}
