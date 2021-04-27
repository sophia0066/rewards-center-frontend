import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import {CustomerProfileComponent} from './customer-profile/customer-profile.component';
import {CustomerDetailsComponent} from './customer-details/customer-details.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerProfileComponent,
  },
  {
    path: 'Profiles/:id',
    component: CustomerDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
