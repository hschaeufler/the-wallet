export const filePickerAcceptTypesToAcceptString = (
  types: FilePickerAcceptType[]
): string => {
  return types
    .map((type) => {
      const mimeTypes = Object.keys(type.accept);
      return mimeTypes
        .map((mimeType) => {
          const fileExtensions = type.accept[mimeType];
          if (Array.isArray(fileExtensions)) {
            return mimeTypes + ',' + fileExtensions.join();
          } else {
            return mimeTypes + fileExtensions;
          }
        })
        .join();
    })
    .join();
};
