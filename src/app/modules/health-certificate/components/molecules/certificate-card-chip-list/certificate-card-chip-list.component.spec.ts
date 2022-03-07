import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateCardChipListComponent } from './certificate-card-chip-list.component';

describe('CertificateCardChipListComponent', () => {
  let component: CertificateCardChipListComponent;
  let fixture: ComponentFixture<CertificateCardChipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CertificateCardChipListComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateCardChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
