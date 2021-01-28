import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishPlanComponent } from './spanish-plan.component';

describe('SpanishPlanComponent', () => {
  let component: SpanishPlanComponent;
  let fixture: ComponentFixture<SpanishPlanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishPlanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
