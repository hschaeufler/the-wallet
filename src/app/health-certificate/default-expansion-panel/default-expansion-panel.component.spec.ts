import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultExpansionPanelComponent } from './default-expansion-panel.component';

describe('DefaultExpansionPanelComponent', () => {
  let component: DefaultExpansionPanelComponent;
  let fixture: ComponentFixture<DefaultExpansionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DefaultExpansionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultExpansionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
