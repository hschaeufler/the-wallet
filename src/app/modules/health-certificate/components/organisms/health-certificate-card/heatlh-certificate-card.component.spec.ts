import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeatlhCertificateCardComponent } from './heatlh-certificate-card.component';

describe('HeatlhCertificateCardComponent', () => {
  let component: HeatlhCertificateCardComponent;
  let fixture: ComponentFixture<HeatlhCertificateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeatlhCertificateCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeatlhCertificateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
