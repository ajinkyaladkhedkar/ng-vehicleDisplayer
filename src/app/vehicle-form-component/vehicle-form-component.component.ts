import { Component, OnInit } from '@angular/core';
import {VehicleInfoService} from '../vehicle-info-service.service';

@Component({
  selector: 'app-vehicle-form-component',
  templateUrl: './vehicle-form-component.component.html',
  styleUrls: ['./vehicle-form-component.component.css']
})
export class VehicleFormComponentComponent {

  newvehicle = {
    'vin': 'WP1AB29P63LA60171',
    'make': null,
    'model': 'Series 3',
    'year': 2018,
    'redlineRpm': 10000,
    'maxFuelVolume': 20,
    'lastServiceDate': '2018-03-25T17:31:25.268Z'
  };
  constructor(public vehicleInfoService: VehicleInfoService) {
  }
  addVehicle() {
    this.vehicleInfoService.addVehicleInfo(this.newvehicle);
  }
}
