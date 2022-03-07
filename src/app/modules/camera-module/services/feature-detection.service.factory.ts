import { FeatureDetectionService } from './feature-detection.service';

export const featureDetectionServiceFactory = (
  featureDetectionService: FeatureDetectionService
) => {
  return () => featureDetectionService.init();
};
