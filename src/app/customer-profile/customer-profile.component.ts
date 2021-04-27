import { Component, OnInit } from '@angular/core';

import {ICustomerData} from '../model/icustomer-data';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {

  customerData: ICustomerData[] = [];
  constructor(private route: ActivatedRoute, private service: UserService) {
  }

  ngOnInit(): void {
    this.service.getAllCustomers().subscribe(allProfiles => {
      this.customerData = allProfiles;
    });
  }
}

