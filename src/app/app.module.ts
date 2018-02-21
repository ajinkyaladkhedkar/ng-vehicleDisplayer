import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import {VehicleInfoService} from './vehicle-info-service.service';
import { VehicleFormComponentComponent } from './vehicle-form-component/vehicle-form-component.component';


@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [VehicleInfoService],   //Register Services at Application level scope
  bootstrap: [AppComponent]
})
export class AppModule { }
