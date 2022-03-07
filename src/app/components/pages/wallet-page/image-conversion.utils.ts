import { from, fromEvent, map, merge, Observable, throwError } from 'rxjs';

export const blobToDataURL = (blob: Blob): Observable<string> => {
  const result$ = new Observable<string>((observer$) => {
    try {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        if (reader.result) {
          observer$.next(reader.result as string);
          observer$.complete();
        } else {
          throw new DOMException('Image Result is empty!');
        }
      });
      reader.readAsDataURL(blob);
    } catch (e) {
      observer$.error(e);
    }
  });
  return result$;
};

export const blobToArrayBuffer = (blob: Blob): Observable<ArrayBuffer> => {
  try {
    return from(blob.arrayBuffer());
  } catch (e) {
    return throwError(() => e);
  }
};

export const blobToImageData = (blob: Blob): Observable<ImageData> => {
  try {
    const image = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const objectURL = URL.createObjectURL(blob);
    //throw Error when Error occurs or form to ImageData
    const result$ = merge(
      fromEvent(image, 'error').pipe(
        map((event) => {
          //need to Revoke ObjectURL so no MemoryLeek occurs
          URL.revokeObjectURL(objectURL);
          throw event;
        })
      ),
      fromEvent(image, 'load').pipe(
        map(() => {
          URL.revokeObjectURL(objectURL);
          const [width, height] = [image.width, image.height];
          canvas.width = width;
          canvas.height = height;
          ctx!.drawImage(image, 0, 0);
          return ctx!.getImageData(0, 0, width, height);
        })
      )
    );
    image.src = objectURL;
    return result$;
  } catch (e) {
    return throwError(e);
  }
};
