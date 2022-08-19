import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlightRoutingModule } from './flight-routing.module';
import { FIndexComponent } from './f-index/f-index.component';
import { FcreateComponent } from './fcreate/fcreate.component';
import { FeditComponent } from './fedit/fedit.component';
import { FdetailsComponent } from './fdetails/fdetails.component';
import { PIndexComponent } from '../passenger/p-index/p-index.component';


@NgModule({
  declarations: [
    FIndexComponent,
    FcreateComponent,
    FeditComponent,
    FdetailsComponent,
    PIndexComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlightRoutingModule
  ]
})
export class FlightModule { }
