import {
  concatMap,
  first,
  forkJoin,
  from,
  fromEvent,
  map,
  merge,
  Observable,
  throwError,
} from 'rxjs';

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

export const blobToImageData = (blob: Blob) => {
  try {
    const image = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const objectURL = URL.createObjectURL(blob);
    const result$ = merge(
      fromEvent(image, 'error').pipe(
        concatMap((event) => throwError(() => event))
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
    ).pipe(first());
    image.src = objectURL;
    return result$;
  } catch (e) {
    return throwError(e);
  }
};
