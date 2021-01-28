import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSpanishComponent } from './courses-spanish.component';

describe('CoursesSpanishComponent', () => {
  let component: CoursesSpanishComponent;
  let fixture: ComponentFixture<CoursesSpanishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSpanishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
