import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {VehicleInfoService} from './vehicle-info-service.service';
import { VehicleFormComponentComponent } from './vehicle-form-component/vehicle-form-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserDetailsService} from './user-details.service';


@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponentComponent,
    UserDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [VehicleInfoService, UserDetailsService],   //Register Services at Application level scope
  bootstrap: [AppComponent]
})
export class AppModule { }
