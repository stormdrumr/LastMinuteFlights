import { Component, OnInit } from '@angular/core'; 
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { FlightService } from '../flight.service';


@Component({
  selector: 'app-fcreate',
  templateUrl: './fcreate.component.html',
  styleUrls: ['./fcreate.component.css']
})
export class FcreateComponent implements OnInit {

  public newFlightForm!: FormGroup;
  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit(): void {
    this.newFlightForm = new FormGroup({
      flightNum: new FormControl ("", Validators.required),
      destination: new FormControl("", Validators.required),
      departureAirport: new FormControl("", Validators.required),
      departureTime: new FormControl("", Validators.required),
      departureDate: new FormControl("", Validators.required),
      arrivalAirport: new FormControl("", Validators.required),
      arrivalTime: new FormControl("", Validators.required),
      arrivalDate: new FormControl("", Validators.required),
      maxCapacity: new FormControl("", Validators.required)
    })
  }

  get nFF () {return this.newFlightForm.controls;}

  submit(){
    this.flightService.createFlight(this.newFlightForm.value).subscribe(() => {
    console.log(this.newFlightForm.value);
    console.log(this.newFlightForm.valid);
    console.log("The new flight was created successfully.");
    this.router.navigateByUrl('flight/f-index');
  });
}
}

