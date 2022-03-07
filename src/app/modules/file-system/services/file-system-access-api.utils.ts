export const detectFSAApiFilePicker = (): boolean => {
  return 'showOpenFilePicker' in window;
};

export const detectFileSystemAccessApi = (): boolean => {
  return detectFSAApiFilePicker();
};
