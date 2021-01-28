import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnglishGeneralComponent } from './english-general.component';

describe('EnglishGeneralComponent', () => {
  let component: EnglishGeneralComponent;
  let fixture: ComponentFixture<EnglishGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnglishGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnglishGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
