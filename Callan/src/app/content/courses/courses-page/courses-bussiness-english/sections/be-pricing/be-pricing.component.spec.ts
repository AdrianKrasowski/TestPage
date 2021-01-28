import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePricingComponent } from './be-pricing.component';

describe('BePricingComponent', () => {
  let component: BePricingComponent;
  let fixture: ComponentFixture<BePricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BePricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BePricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
