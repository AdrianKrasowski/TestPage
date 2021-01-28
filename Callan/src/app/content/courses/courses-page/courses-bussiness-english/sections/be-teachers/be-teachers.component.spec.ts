import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeTeachersComponent } from './be-teachers.component';

describe('BeTeachersComponent', () => {
  let component: BeTeachersComponent;
  let fixture: ComponentFixture<BeTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
