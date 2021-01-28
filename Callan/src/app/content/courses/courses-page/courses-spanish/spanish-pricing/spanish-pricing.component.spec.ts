import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishPricingComponent } from './spanish-pricing.component';

describe('SpanishPricingComponent', () => {
  let component: SpanishPricingComponent;
  let fixture: ComponentFixture<SpanishPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
