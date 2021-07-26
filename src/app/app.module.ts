import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { NavbarComponent } from './navbar/navbar.component';

import { CarasoulComponent } from './carasoul/carasoul.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { SecnavbarComponent } from './secnavbar/secnavbar.component';
import { EndbarComponent } from './endbar/endbar.component';
import { MotorcyclesComponent } from './motorcycles/motorcycles.component';
import { LocateusComponent } from './locateus/locateus.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { RidesComponent } from './rides/rides.component';
import { ApperalsComponent } from './apperals/apperals.component';
import { Nav1Component } from './nav1/nav1.component';
import { CartComponent } from './cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// For MDB Angular Free









@NgModule({
  declarations: [
    AppComponent,
    FirstpageComponent,
    NavbarComponent,
    
    CarasoulComponent,
    SecnavbarComponent,
    EndbarComponent,
    MotorcyclesComponent,
    LocateusComponent,
    LoginComponent,
    LoggedinComponent,
    RidesComponent,
    ApperalsComponent,
    Nav1Component,
    CartComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,CarouselModule,FormsModule,ReactiveFormsModule, BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
