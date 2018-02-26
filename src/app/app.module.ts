import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {VehicleInfoService} from './vehicle-info-service.service';
import { VehicleFormComponentComponent } from './vehicle-form-component/vehicle-form-component.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {UserDetailsService} from './user-details.service';
import {RouterModule, Routes} from '@angular/router';
import { VehicleDetailsComponent } from './vehicle-details/vehicle-details.component';

const appRoutes: Routes = [
  { path: 'users', component: UserDetailsComponent },
  { path: 'addvehicle', component: VehicleFormComponentComponent },
  { path: 'vehicles', component: VehicleDetailsComponent },
  { path: '**', redirectTo: '/vehicles', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    VehicleFormComponentComponent,
    UserDetailsComponent,
    VehicleDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)       // Importing RouterModule
  ],
  providers: [VehicleInfoService, UserDetailsService],   // Register Services at Application level scope
  bootstrap: [AppComponent]
})
export class AppModule { }
