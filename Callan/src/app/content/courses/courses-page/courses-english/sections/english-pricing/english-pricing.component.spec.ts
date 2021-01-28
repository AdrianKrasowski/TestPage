import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishPricingComponent } from './english-pricing.component';

describe('EnglishPricingComponent', () => {
  let component: EnglishPricingComponent;
  let fixture: ComponentFixture<EnglishPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
