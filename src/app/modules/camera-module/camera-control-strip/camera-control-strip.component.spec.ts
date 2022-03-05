import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraControlStripComponent } from './camera-control-strip.component';

describe('CameraControlStripComponent', () => {
  let component: CameraControlStripComponent;
  let fixture: ComponentFixture<CameraControlStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CameraControlStripComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraControlStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
