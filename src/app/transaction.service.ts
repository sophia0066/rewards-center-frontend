import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {ITransactionData} from './model/itransaction-data';

@Injectable({
  providedIn: 'root'
})

export class TransactionService {
  private readonly baseUrl: string;
  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080/api/Profiles/';
  }
  private path = '/transactions';
  getAllTransactions(id: string): Observable<ITransactionData[]> {
    return this.httpClient.get<ITransactionData[]>(this.baseUrl + id + this.path);
  }
}

