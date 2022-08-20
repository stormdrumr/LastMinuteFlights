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

  flightID!: number;
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
    this.flightID = this.route.snapshot.params['flightID'];
    this.flightService.getOneFlight(this.flightID).subscribe((data: Travel)=>{
      this.travel = data;
      console.log(data);
    });
  }
}
