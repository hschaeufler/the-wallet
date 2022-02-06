import {FeatureDetectionStartupService} from "./feature-detection-startup.service";

export const featureDetectionStartupServiceFactory = (
  featureDetectionStartupService: FeatureDetectionStartupService
) => {
  return () => featureDetectionStartupService.init();
}
