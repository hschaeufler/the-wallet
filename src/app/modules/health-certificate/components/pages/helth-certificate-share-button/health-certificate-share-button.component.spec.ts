import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCertificateShareButtonComponent } from './health-certificate-share-button.component';

describe('HelthCertificateShareButtonComponent', () => {
  let component: HealthCertificateShareButtonComponent;
  let fixture: ComponentFixture<HealthCertificateShareButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HealthCertificateShareButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCertificateShareButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
