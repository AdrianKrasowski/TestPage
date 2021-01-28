import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishPricingButtonComponent } from './english-pricing-button.component';

describe('EnglishPricingButtonComponent', () => {
  let component: EnglishPricingButtonComponent;
  let fixture: ComponentFixture<EnglishPricingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishPricingButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishPricingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
