import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCardHeaderComponent } from './certificate-card-header.component';

describe('CertificateCardHeaderComponent', () => {
  let component: CertificateCardHeaderComponent;
  let fixture: ComponentFixture<CertificateCardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateCardHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
