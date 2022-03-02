import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthCertificatePreviewComponent } from './health-certificate-preview.component';

describe('HealthCertificatePreviewComponent', () => {
  let component: HealthCertificatePreviewComponent;
  let fixture: ComponentFixture<HealthCertificatePreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HealthCertificatePreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthCertificatePreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
