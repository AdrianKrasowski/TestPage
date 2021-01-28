import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BePlanComponent } from './be-plan.component';

describe('BePlanComponent', () => {
  let component: BePlanComponent;
  let fixture: ComponentFixture<BePlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BePlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BePlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
