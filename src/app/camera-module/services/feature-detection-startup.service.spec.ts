import { TestBed } from '@angular/core/testing';

import { FeatureDetectionStartupService } from './feature-detection-startup.service';

describe('FeatureDetectionServiceService', () => {
  let service: FeatureDetectionStartupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureDetectionStartupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
