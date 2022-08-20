import { Component, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Travel } from '../travel';

@Component({
  selector: 'app-f-index',
  templateUrl: './f-index.component.html',
  styleUrls: ['./f-index.component.css']
})
export class FIndexComponent implements OnInit {
  travel: Travel[] = [];

  constructor(private flightService: FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

loadFlights() : void {
  this.flightService.getFlights().subscribe(travel => this.travel = travel)
}

makeFlight(travel: Travel) : void {
  this.flightService.createFlight(travel).subscribe()
  }


}
