import { TestBed } from '@angular/core/testing';

import { FeatureDetectionService } from './feature-detection.service';

describe('FeatureDetectionServiceService', () => {
  let service: FeatureDetectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FeatureDetectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
