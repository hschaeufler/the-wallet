export class CameraUtils {
  private static supportsNativeImageCaptureApi() {
    return 'ImageCapture' in window;
  }

  private static supportsCanvasImageApi() {
    return !!document.createElement('canvas').getContext
      && !!document.createElement('canvas').toBlob;
  }

  private static async takeNativePicture(mediaStream: MediaStream, photoSettings?: PhotoSettings): Promise<Blob> {
    if (!this.supportsNativeImageCaptureApi()) {
      throw "Please use ths function only when ImageCapture-Api is supported!";
    }
    if (mediaStream.active) {
      const mediaStreamTracks = mediaStream.getTracks();
      const imageCapture = new ImageCapture(mediaStreamTracks[0]);
      const photo = await imageCapture.takePhoto(photoSettings);
      return photo;
    } else {
      throw new DOMException("Stream is not active anymore!");
    }
  }

  private static async takeCanvasPicture(mediaStream: MediaStream): Promise<Blob> {
    const photoPromise = new Promise<Blob>((resolve, reject) => {
      if (mediaStream.active) {
        const video = document.createElement("video");
        const canvas = document.createElement("canvas");
        video.autoplay = true;
        video.srcObject = mediaStream;
        video.addEventListener("canplay", (event) => {
          const height = video.videoHeight;
          const width = video.videoWidth;
          const context = canvas.getContext("2d");
          if (!context) {
            throw new DOMException("No 2d-Context from Canvas replied!");
          }
          context.drawImage(video, 0, 0, width, height);
          canvas.toBlob((blob) => {
            if (blob) {
              resolve(blob);
            } else {
              reject(new DOMException("Could not generate Blob!"));
            }
          });
        })
      } else {
        throw new DOMException("VideoStream not active!");
      }
    });
    return photoPromise;
  }

  static async drawImageOfStream(mediaStream: MediaStream, photoSettings?: PhotoSettings):  Promise<Blob> {
    const photo = this.supportsNativeImageCaptureApi()
      ? await this.takeNativePicture(mediaStream, photoSettings)
      : await this.takeCanvasPicture(mediaStream);
    return photo;
  }

  static drawingImagesIsSupported() {
    return this.supportsCanvasImageApi() || this.supportsNativeImageCaptureApi();
  }

}
