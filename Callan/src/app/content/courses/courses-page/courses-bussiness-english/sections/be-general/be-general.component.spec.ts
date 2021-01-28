import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeGeneralComponent } from './be-general.component';

describe('BeGeneralComponent', () => {
  let component: BeGeneralComponent;
  let fixture: ComponentFixture<BeGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
