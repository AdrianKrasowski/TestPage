import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishExcercisesComponent } from './english-excercises.component';

describe('EnglishExcercisesComponent', () => {
  let component: EnglishExcercisesComponent;
  let fixture: ComponentFixture<EnglishExcercisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishExcercisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishExcercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
