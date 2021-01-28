import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesEnglishComponent } from './courses-english.component';

describe('CoursesEnglishComponent', () => {
  let component: CoursesEnglishComponent;
  let fixture: ComponentFixture<CoursesEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
