import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeExcecisesComponent } from './be-excecises.component';

describe('BeExcecisesComponent', () => {
  let component: BeExcecisesComponent;
  let fixture: ComponentFixture<BeExcecisesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeExcecisesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeExcecisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
