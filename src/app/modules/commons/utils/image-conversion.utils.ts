import {
  bindCallback,
  catchError,
  concatMap,
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

export const blobToImageData = (blob: Blob): Observable<ImageData> => {
  try {
    const objectURL = URL.createObjectURL(blob);
    return drawImageToCanvas(objectURL).pipe(
      catchError((err) => {
        URL.revokeObjectURL(objectURL);
        throw err;
      }),
      map((canvas) => {
        URL.revokeObjectURL(objectURL);
        return canvas
          .getContext('2d')!
          .getImageData(0, 0, canvas.width, canvas.height);
      })
    );
  } catch (e) {
    return throwError(e);
  }
};

export const drawImageToCanvas = (
  url: string
): Observable<HTMLCanvasElement> => {
  try {
    const image = new Image();
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const objectURL = url;
    //throw Error when Error occurs or form to ImageData
    const result$ = merge(
      fromEvent(image, 'error').pipe(
        map((event) => {
          //need to Revoke ObjectURL so no MemoryLeek occurs
          throw event;
        })
      ),
      fromEvent(image, 'load').pipe(
        map(() => {
          const [width, height] = [image.width, image.height];
          canvas.width = width;
          canvas.height = height;
          ctx!.drawImage(image, 0, 0);
          return canvas;
        })
      )
    );
    image.src = objectURL;
    return result$;
  } catch (e) {
    return throwError(e);
  }
};

export const dataUrlToBlob = (dataURL: string) => {
  if ('fetch' in window) {
    return from(fetch(dataURL)).pipe(
      concatMap((response) => from(response.blob()))
    );
  } else {
    return drawImageToCanvas(dataURL).pipe(
      concatMap((canvas) => {
        const toBlob$ = bindCallback(
          (callback: (blob: Blob | null) => void) => {
            canvas.toBlob(callback);
          }
        );
        return toBlob$().pipe(
          map((blob) => {
            if (!blob) {
              throw new DOMException('Not possible to Build Blob!');
            }
            return blob;
          })
        );
      })
    );
  }
};

export const dataURLToFile = (
  dataURL: string,
  fileName: string
): Observable<File> => {
  return dataUrlToBlob(dataURL).pipe(
    map((blob) => new File([blob], fileName, { type: blob.type }))
  );
};
