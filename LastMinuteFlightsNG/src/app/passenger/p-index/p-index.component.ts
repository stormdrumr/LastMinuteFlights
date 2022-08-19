import { Component, OnInit } from '@angular/core';

import { Traveller } from '../traveller';
import { PassengerService } from '../passenger.service';

@Component({
  selector: 'app-p-index',
  templateUrl: './p-index.component.html',
  styleUrls: ['./p-index.component.css']
})
export class PIndexComponent implements OnInit {

  traveller: Traveller[] = [];

  constructor(private passengerService: PassengerService) { }

  ngOnInit(): void {
    this.loadFlights();
  }

loadFlights() : void {
  this.passengerService.getPassengers().subscribe(traveller => this.traveller = traveller)
}
}
