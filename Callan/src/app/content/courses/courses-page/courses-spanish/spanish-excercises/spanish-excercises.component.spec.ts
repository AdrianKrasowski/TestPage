import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishExcercisesComponent } from './spanish-excercises.component';

describe('SpanishExcercisesComponent', () => {
  let component: SpanishExcercisesComponent;
  let fixture: ComponentFixture<SpanishExcercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishExcercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishExcercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
