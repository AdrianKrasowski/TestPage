import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeLessonsComponent } from './be-lessons.component';

describe('BeLessonsComponent', () => {
  let component: BeLessonsComponent;
  let fixture: ComponentFixture<BeLessonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeLessonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeLessonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
