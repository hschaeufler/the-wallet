export const detectFSAOpenApiFilePicker = (): boolean => {
  return 'showOpenFilePicker' in window;
};

export const detectFSASaveApiFilePicker = (): boolean => {
  return 'showSaveFilePicker' in window;
};

export const detectFileSystemAccessApi = (): boolean => {
  return detectFSASaveApiFilePicker() && detectFSAOpenApiFilePicker();
};
