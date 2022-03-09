import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PkpassPrimaryFieldsComponent } from './pkpass-primary-fields.component';

describe('PkpassPrimaryFieldsComponent', () => {
  let component: PkpassPrimaryFieldsComponent;
  let fixture: ComponentFixture<PkpassPrimaryFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PkpassPrimaryFieldsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PkpassPrimaryFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
