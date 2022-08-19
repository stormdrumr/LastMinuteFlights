import { Component, OnInit } from '@angular/core';
import { PassengerService } from '../passenger.service';

import { Router, ActivatedRoute } from '@angular/router';
import { Traveller } from '../traveller';

@Component({
  selector: 'app-pdetails',
  templateUrl: './pdetails.component.html',
  styleUrls: ['./pdetails.component.css']
})
export class PdetailsComponent implements OnInit {

  passengerID!: number;
  firstName!: string;
  lastName!: string;
  email!: string;


  constructor( 
  public passengerService: PassengerService,
  private router: Router,
  private route: ActivatedRoute
  )
  { }

  ngOnInit(): void {
    this.passengerID = this.route.snapshot.params['PassengerId'];

    this.passengerService.getOnePassenger(this.passengerID).subscribe((data: Traveller)=>{
      this.firstName
      this.lastName
      this.email
 
    });
  }
}
