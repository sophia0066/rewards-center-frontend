import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ICustomerData} from './model/icustomer-data';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private readonly customerUrl: string;
  constructor(private httpClient: HttpClient) {
    this.customerUrl = 'http://localhost:8080/api/Profiles';
  }
  getAllCustomers(): Observable<ICustomerData[]> {
    return this.httpClient.get<ICustomerData[]>(this.customerUrl);
  }

  getCustomerDetails(id: string): Observable<ICustomerData> {
    return this.httpClient.get<ICustomerData>(this.customerUrl + '/' + id);
  }
}


