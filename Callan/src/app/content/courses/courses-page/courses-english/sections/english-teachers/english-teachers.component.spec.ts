import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishTeachersComponent } from './english-teachers.component';

describe('EnglishTeachersComponent', () => {
  let component: EnglishTeachersComponent;
  let fixture: ComponentFixture<EnglishTeachersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishTeachersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishTeachersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
