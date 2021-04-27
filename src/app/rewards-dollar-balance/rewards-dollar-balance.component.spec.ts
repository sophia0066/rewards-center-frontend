import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsDollarBalanceComponent } from './rewards-dollar-balance.component';

describe('RewardsDollarBalanceComponent', () => {
  let component: RewardsDollarBalanceComponent;
  let fixture: ComponentFixture<RewardsDollarBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RewardsDollarBalanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardsDollarBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
