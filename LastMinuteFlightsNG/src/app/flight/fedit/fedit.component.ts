import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { FlightService } from '../flight.service';
import { Travel } from '../travel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fedit',
  templateUrl: './fedit.component.html',
  styleUrls: ['./fedit.component.css']
})
export class FeditComponent implements OnInit {

  public newFlightForm!: FormGroup;
  public travel!: Travel;
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.newFlightForm = new FormGroup({
      flightNum: new FormControl (""),
      destination: new FormControl(""),
      departureAirport: new FormControl(""),
      departureTime: new FormControl(""),
      departureDate: new FormControl(""),
      arrivalAirport: new FormControl(""),
      arrivalTime: new FormControl(""),
      arrivalDate: new FormControl(""),
      maxCapacity: new FormControl("")
    })
  }

  get nFF () {return this.newFlightForm.controls;}

  submit(){
    this.flightService.updateFlight(this.newFlightForm.value).subscribe(() => {
    console.log(this.newFlightForm.value);
    console.log(this.newFlightForm.valid);
    console.log("The new flight was created successfully.");
    this.router.navigateByUrl('flight/f-index');
  });
}
}