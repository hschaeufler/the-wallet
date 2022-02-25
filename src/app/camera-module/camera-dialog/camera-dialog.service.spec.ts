import { TestBed } from '@angular/core/testing';

import { CameraDialogService } from './camera-dialog.service';

describe('CameraDialogServiceService', () => {
  let service: CameraDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CameraDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
