import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePricingButtonComponent } from './be-pricing-button.component';

describe('BePricingButtonComponent', () => {
  let component: BePricingButtonComponent;
  let fixture: ComponentFixture<BePricingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BePricingButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BePricingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
