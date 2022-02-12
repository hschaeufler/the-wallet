export class ImageCaptureUtils {

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
