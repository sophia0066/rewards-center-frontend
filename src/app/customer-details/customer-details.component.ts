import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {ICustomerData} from '../model/icustomer-data';
import {UserService} from '../user.service';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {
  public customerDetails: ICustomerData = {id: '', email: '', name: '', phone: ''};
  constructor(private route: ActivatedRoute, private service: UserService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.service.getCustomerDetails(String(params.get('id'))).subscribe(customer => {
        // @ts-ignore
        this.customerDetails = customer;
      });
    });
  }
}

