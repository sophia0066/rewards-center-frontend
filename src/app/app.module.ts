import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { RewardsDollarBalanceComponent } from './rewards-dollar-balance/rewards-dollar-balance.component';
import { TopnavComponent } from './topnav/topnav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {UserService} from './user.service';
import {TransactionService} from './transaction.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    CustomerProfileComponent,
    CustomerDetailsComponent,
    TransactionsComponent,
    RewardsDollarBalanceComponent,
    TopnavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatFormFieldModule,
    MatTableModule
  ],
  providers: [UserService, TransactionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
