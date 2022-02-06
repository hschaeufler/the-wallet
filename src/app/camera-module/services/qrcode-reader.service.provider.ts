import {QrcodeReaderService} from "./qrcode-reader.service";
import {NativeQrcodeReaderService} from "./native-qrcode-reader.service";
import {JsQrcodeReaderService} from "./js-qrcode-reader.service";
import {FeatureDetectionStartupService} from "./feature-detection-startup.service";

const qrcodeReaderServiceFactory = (featureDetectionStartupService: FeatureDetectionStartupService) => {
  return featureDetectionStartupService.qrCodeReader
    ? new NativeQrcodeReaderService()
    : new JsQrcodeReaderService();
}

export const qrcodeReaderServiceProvider =
  { provide: QrcodeReaderService,
    useFactory: qrcodeReaderServiceFactory,
    deps: [FeatureDetectionStartupService]
  };
