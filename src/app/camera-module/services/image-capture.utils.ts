import {ImageCaptureApi} from "../polyfills/image-capture-api.polyfill";

export class ImageCaptureUtils {

  static async getImageDataOfMediaStream(mediaStream: MediaStream): Promise<ImageData> {
    if (mediaStream.active) {
      const mediaStreamTracks = mediaStream.getTracks();
      const imageCaptureApi = new ImageCaptureApi(mediaStreamTracks[0]);
      const {canvas, context} = await imageCaptureApi.drawImageToCanvas();
      const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
      return imageData;
    } else {
      throw new DOMException("MediaStream not active!");
    }
  }

  static async takePictureOfStream(mediaStream: MediaStream, photoSettings?: PhotoSettings): Promise<Blob> {
    if(mediaStream.active) {
      const mediaStreamTracks = mediaStream.getTracks();
      const imageCapture = new ImageCapture(mediaStreamTracks[0]);
      const picture = await imageCapture.takePhoto(photoSettings);
      return picture;
    } else {
      throw new DOMException("MediaStream not active!");
    }
  }
}
