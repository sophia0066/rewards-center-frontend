import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';
import {TransactionService} from '../transaction.service';

@Component({
  selector: 'app-rewards-dollar-balance',
  templateUrl: './rewards-dollar-balance.component.html',
  styleUrls: ['./rewards-dollar-balance.component.scss']
})
export class RewardsDollarBalanceComponent implements OnInit {
  constructor(private route: ActivatedRoute, private transactionData: TransactionService) {
  }
  amountsArray: number[] = [];
  rewardsEarned = 0;

  private rewardsPoint = 0;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.transactionData.getAllTransactions(String(params.get('id'))).subscribe((allTransactions) => {
        this.amountsArray = (allTransactions.map(transactions => transactions.amount));
        this.rewardsEarned = this.calculateTotalRewardsEarned();
      });
    });
  }

  calculateTotalRewardsEarned(): number {
    for (const purchase of this.amountsArray) {
      this.rewardsEarned += this.rewardsPointsForAPurchase(purchase);
    }
    return this.rewardsEarned;
  }

  rewardsPointsForAPurchase(purchaseAmount: number): number {
    if (Math.floor(purchaseAmount) > 50 && Math.floor(purchaseAmount) < 100) {
      this.rewardsPoint = (Math.floor(purchaseAmount) - 50);
    } else if (purchaseAmount > 100) {
      this.rewardsPoint = 50 + ((Math.floor(purchaseAmount) - 100) * 2);
    } else if (Math.floor(purchaseAmount) <= 50) {
      return 0;
    }
    return this.rewardsPoint;
  }
}


