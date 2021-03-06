/*
 * This is a Polyfill for the ImageCapture-Api
 * Have a Look at https://www.w3.org/TR/image-capture/
 * Also i seem not the first person to try, to implement a Poly-Fill fot the Image-Capture-Api:
 * https://github.com/GoogleChromeLabs/imagecapture-polyfill/blob/master/src/imagecapture.js
 * */
export class ImageCaptureApi implements ImageCapture {
  static readonly READY_STATE_LIVE = 'live';
  static readonly MEDIA_STREAM_TRACK_KIND_VIDEO = 'video';

  readonly track: MediaStreamTrack;
  private readonly _videoElement: HTMLVideoElement;
  private readonly _canvasElement: HTMLCanvasElement;
  private readonly _context: CanvasRenderingContext2D;
  private readonly _isPlayingPromise: Promise<void>;

  constructor(track: MediaStreamTrack) {
    if (!track) {
      throw new DOMException(
        'MediaStreamTrack is null or undefined!',
        'DataError'
      );
    }
    if (track.kind !== ImageCaptureApi.MEDIA_STREAM_TRACK_KIND_VIDEO) {
      throw new DOMException(
        'MediaStreamTrack must be of the kind video!',
        'NotSupportedError'
      );
    }

    this.track = track;
    this._videoElement = document.createElement('video');
    //Fix for iOS 10
    //see: https://stackoverflow.com/questions/19521667/disable-fullscreen-iphone-video
    this._videoElement.playsInline = true;
    this._canvasElement = document.createElement('canvas');
    // @ts-ignore
    this._context = this._canvasElement.getContext('2d');
    const mediaStream = new MediaStream([this.track]);
    this._videoElement.srcObject = mediaStream;
    this._isPlayingPromise = this._videoElement.play();
  }

  getPhotoCapabilities(): Promise<PhotoCapabilities> {
    console.warn(
      'the getPhotoCapabilities is not implemented and returns only default values!'
    );
    const photoCapabilities: PhotoCapabilities = {
      redEyeReduction: 'never',
      fillLightMode: ['off'],
      imageHeight: { max: 0, min: 0, step: 0 },
      imageWidth: { max: 0, min: 0, step: 0 },
    };
    return Promise.resolve(photoCapabilities);
  }

  getPhotoSettings(): Promise<PhotoSettings> {
    console.warn(
      'the getPhotoSettings is not implemented and returns only default values!'
    );
    const photoCapabilities: PhotoSettings = {
      redEyeReduction: undefined,
      fillLightMode: undefined,
      imageHeight: undefined,
      imageWidth: undefined,
    };
    return Promise.resolve(photoCapabilities);
  }

  async grabFrame(): Promise<ImageBitmap> {
    const { context } = await this.drawImageToCanvas();
    const imageData = context.getImageData(
      0,
      0,
      this._videoElement.width,
      this._videoElement.height
    );
    const imageBitMap = await createImageBitmap(imageData);
    return imageBitMap;
  }

  async drawImageToCanvas(): Promise<{
    canvas: HTMLCanvasElement;
    context: CanvasRenderingContext2D;
  }> {
    // IE does not support readyState: https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack/readyState
    if (
      !this.track.readyState ||
      this.track.readyState === ImageCaptureApi.READY_STATE_LIVE
    ) {
      return this._isPlayingPromise.then(() => {
        const width = this._videoElement.videoWidth;
        const height = this._videoElement.videoHeight;
        this._canvasElement.width = width;
        this._canvasElement.height = height;
        if (!this._context) {
          throw new DOMException('No 2d-Context from Canvas replied!');
        }
        this._context.drawImage(this._videoElement, 0, 0);
        return { canvas: this._canvasElement, context: this._context };
      });
    } else {
      throw new DOMException('VideoStream not active!', 'InvalidStateError');
    }
  }

  //take a look at https://w3c.github.io/mediacapture-image/#dom-imagecapture-grabframe
  async takePhoto(photoSettings?: PhotoSettings): Promise<Blob> {
    if (photoSettings) {
      console.log('PhotoSettings are not supported in Polyfill!');
    }
    const { canvas } = await this.drawImageToCanvas();
    return new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((blob) => {
        blob
          ? resolve(blob)
          : reject(new DOMException('Could not generate Blob!'));
      });
    });
  }
}

if (!('ImageCapture' in window)) {
  window.ImageCapture = ImageCaptureApi;
}
