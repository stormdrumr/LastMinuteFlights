import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { PassengerService } from '../passenger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedit',
  templateUrl: './pedit.component.html',
  styleUrls: ['./pedit.component.css']
})
export class PeditComponent implements OnInit {
    public newPassengerForm!: FormGroup;
    constructor(private passengerService: PassengerService, private router: Router) { }
  
    ngOnInit(): void {
      this.newPassengerForm = new FormGroup({
        firstName: new FormControl (""),
        lastName: new FormControl(""),
        email: new FormControl("")
      })
    }
    get nPF () {return this.newPassengerForm.controls;}
  
    submit(){
      this.passengerService.updatePassenger(this.newPassengerForm.value).subscribe(() => {
      console.log(this.newPassengerForm.value);
      console.log(this.newPassengerForm.valid);
      console.log("The new flight was updated successfully.");
      this.router.navigateByUrl('passenger/p-index');
    });
  }
}
