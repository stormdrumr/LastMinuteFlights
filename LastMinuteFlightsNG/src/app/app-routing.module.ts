import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FIndexComponent } from './flight/f-index/f-index.component';
import { PIndexComponent } from './passenger/p-index/p-index.component';

const routes: Routes = [
  {path: '', redirectTo: '/flight/f-index', pathMatch: 'full'},
  {path: 'flight', component: FIndexComponent},
  {path: 'passenger', component: PIndexComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
