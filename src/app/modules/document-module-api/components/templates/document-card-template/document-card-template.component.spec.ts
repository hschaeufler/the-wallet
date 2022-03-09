import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentCardTemplateComponent } from './document-card-template.component';

describe('DocumentCardTemplateComponent', () => {
  let component: DocumentCardTemplateComponent;
  let fixture: ComponentFixture<DocumentCardTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocumentCardTemplateComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentCardTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
