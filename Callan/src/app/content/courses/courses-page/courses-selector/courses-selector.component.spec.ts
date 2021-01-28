import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSelectorComponent } from './courses-selector.component';

describe('CoursesSelectorComponent', () => {
  let component: CoursesSelectorComponent;
  let fixture: ComponentFixture<CoursesSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
