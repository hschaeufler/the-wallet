import {QrcodeReaderService} from "./qrcode-reader.service";
import {NativeQrcodeReaderService} from "./native-qrcode-reader.service";
import {JsQrcodeReaderService} from "./js-qrcode-reader.service";
import {FeatureDetectionService} from "./feature-detection.service";

const qrcodeReaderServiceFactory = (featureDetectionStartupService: FeatureDetectionService) => {
  return featureDetectionStartupService.qrCodeReader
    ? new NativeQrcodeReaderService()
    : new JsQrcodeReaderService();
}

export const qrcodeReaderServiceProvider =
  { provide: QrcodeReaderService,
    useFactory: qrcodeReaderServiceFactory,
    deps: [FeatureDetectionService]
  };
