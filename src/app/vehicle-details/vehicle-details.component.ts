import { Component, OnInit } from '@angular/core';
import {VehicleInfoService} from '../vehicle-info-service.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  vehiclesinfo;
  // Dependency Injection
  constructor(vehicleInfoService: VehicleInfoService) {
    this.vehiclesinfo = vehicleInfoService.getVehicleInfo();
  }
}
