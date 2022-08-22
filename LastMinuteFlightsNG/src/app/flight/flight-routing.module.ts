import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FIndexComponent } from './f-index/f-index.component';
import { FcreateComponent } from './fcreate/fcreate.component';
import { FdetailsComponent } from './fdetails/fdetails.component';
import { FeditComponent } from './fedit/fedit.component';

const routes: Routes = [
  {path: 'flight', redirectTo: 'flight/f-index', pathMatch: 'full'},
  {path: 'flight/f-index', component: FIndexComponent},
  {path: 'flight/fcreate', component: FcreateComponent},
  {path: 'flight/fdetails/:flightID', component: FdetailsComponent},
  {path: 'flight/fedit/:flightID', component: FeditComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
