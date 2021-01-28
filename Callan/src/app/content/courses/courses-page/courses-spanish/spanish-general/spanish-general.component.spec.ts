import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpanishGeneralComponent } from './spanish-general.component';

describe('SpanishGeneralComponent', () => {
  let component: SpanishGeneralComponent;
  let fixture: ComponentFixture<SpanishGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpanishGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpanishGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
