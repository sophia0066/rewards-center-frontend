import { Component, OnInit } from '@angular/core';

import {ITransactionData} from '../model/itransaction-data';
import {ActivatedRoute} from '@angular/router';
import {TransactionService} from '../transaction.service';
import { FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private transactionData: TransactionService) {
  }

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl()
  });
  customerTransactions: ITransactionData[] = [];
  columnsToDisplay: string[] = ['Date', 'Category', 'Amount'];
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.transactionData.getAllTransactions(String(params.get('id'))).subscribe((allTransactions) => {
        this.customerTransactions = allTransactions;
      });
    });
  }

  onSubmit(): void {
    console.log(this.range.value.get('start'));
    this.range.valueChanges.subscribe(click => {
      console.log(click.valueOf());
    });
  }
}


