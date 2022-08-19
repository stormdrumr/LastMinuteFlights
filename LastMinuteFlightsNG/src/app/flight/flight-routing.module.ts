import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FIndexComponent } from './f-index/f-index.component';
import { FcreateComponent } from './fcreate/fcreate.component';
import { FdetailsComponent } from './fdetails/fdetails.component';

const routes: Routes = [
  {path: 'flight', redirectTo: 'flight/f-index', pathMatch: 'full'},
  {path: 'flight/f-index', component: FIndexComponent},
  {path: 'flight/fdetails/:id', component: FdetailsComponent},
  {path: 'flight/fcreate', component: FcreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlightRoutingModule { }
