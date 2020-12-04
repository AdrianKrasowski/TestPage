import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangSelectionTabComponent } from './lang-selection-tab.component';

describe('LangSelectionTabComponent', () => {
  let component: LangSelectionTabComponent;
  let fixture: ComponentFixture<LangSelectionTabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LangSelectionTabComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LangSelectionTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
