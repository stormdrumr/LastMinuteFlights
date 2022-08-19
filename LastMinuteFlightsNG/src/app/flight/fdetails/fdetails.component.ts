import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { ActivatedRoute, Router} from '@angular/router';

import { Travel } from '../travel';

@Component({
  selector: 'app-fdetails',
  templateUrl: './fdetails.component.html',
  styleUrls: ['./fdetails.component.css']
})
export class FdetailsComponent implements OnInit {

  flightId!: number;
  // flightNum!: string;
  // destination!: string;
  // departureAirport!: string;
  // departureTime!: string;
  // departureDate!: string;
  // arrivalAirport!: string;
  // arrivalTime!: string;
  // arrivalDate!: string;
  // maxCapacity!: number;

  public travel!: Travel;
  
  constructor( 
  
  public flightService: FlightService,
  private router: Router,
  private route: ActivatedRoute
  )
  { }

  ngOnInit(): void {
    this.flightId = this.route.snapshot.params['flightId'];

    this.flightService.getOneFlight(this.flightId).subscribe((data: Travel)=>{
      this.travel = data;

      // this.flightNum
      // this.destination
      // this.departureAirport
      // this.departureTime
      // this.departureDate
      // this.arrivalAirport
      // this.arrivalTime
      // this.arrivalDate
      // this.maxCapacity
    });
  }

}
