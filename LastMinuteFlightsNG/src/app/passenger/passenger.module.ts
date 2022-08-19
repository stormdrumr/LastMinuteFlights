import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PassengerRoutingModule } from './passenger-routing.module';
import { PcreateComponent } from './pcreate/pcreate.component';
import { PeditComponent } from './pedit/pedit.component';
import { PdetailsComponent } from './pdetails/pdetails.component';


@NgModule({
  declarations: [
    PcreateComponent,
    PeditComponent,
    PdetailsComponent
  ],
  imports: [
    CommonModule,
    PassengerRoutingModule
  ]
})
export class PassengerModule { }
