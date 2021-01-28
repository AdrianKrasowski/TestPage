import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishPricingButtonComponent } from './spanish-pricing-button.component';

describe('SpanishPricingButtonComponent', () => {
  let component: SpanishPricingButtonComponent;
  let fixture: ComponentFixture<SpanishPricingButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishPricingButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishPricingButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
