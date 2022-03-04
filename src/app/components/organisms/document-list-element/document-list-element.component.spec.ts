import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentListElementComponent } from './document-list-element.component';

describe('DocumentListElementComponent', () => {
  let component: DocumentListElementComponent;
  let fixture: ComponentFixture<DocumentListElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentListElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentListElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
