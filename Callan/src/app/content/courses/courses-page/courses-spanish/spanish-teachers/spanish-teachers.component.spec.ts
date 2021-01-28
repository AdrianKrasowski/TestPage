import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishTeachersComponent } from './spanish-teachers.component';

describe('SpanishTeachersComponent', () => {
  let component: SpanishTeachersComponent;
  let fixture: ComponentFixture<SpanishTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
