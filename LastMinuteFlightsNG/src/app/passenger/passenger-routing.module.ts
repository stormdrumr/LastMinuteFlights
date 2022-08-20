import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PcreateComponent } from './pcreate/pcreate.component';
import { PdetailsComponent } from './pdetails/pdetails.component';

const routes: Routes = [
  {path: 'passenger', redirectTo: 'passenger/pdetails', pathMatch: 'full' },
  {path: 'passenger/pdetails',component: PdetailsComponent},
  {path: 'passenger/pcreate', component: PcreateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PassengerRoutingModule { }
