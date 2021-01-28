import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesBussinessEnglishComponent } from './courses-bussiness-english.component';

describe('CoursesBussinessEnglishComponent', () => {
  let component: CoursesBussinessEnglishComponent;
  let fixture: ComponentFixture<CoursesBussinessEnglishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesBussinessEnglishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesBussinessEnglishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
