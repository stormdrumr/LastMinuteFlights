import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { FlightService } from '../flight.service';
import { Travel } from '../travel';
import { Output } from '@angular/core';

@Component({
  selector: 'app-f-index',
  templateUrl: './f-index.component.html',
  styleUrls: ['./f-index.component.css']
})
export class FIndexComponent implements OnInit {
  travel: Travel[] = [];
  flightId!: number;
  @Output() flightDeleted = new EventEmitter<Travel>();

  constructor(private flightService: FlightService, public fs: FlightService) { }

  ngOnInit(): void {
    this.loadFlights();
    
  }

loadFlights() : void {
  this.flightService.getFlights().subscribe(travel => this.travel = travel)
}

deleteFlight(flightId: number) {
  this.flightService.deleteFlight(flightId).subscribe(travel => this.flightDeleted.emit(travel));
}

}
