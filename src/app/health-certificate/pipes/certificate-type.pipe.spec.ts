import { CertificateTypeNamePipe } from './certificate-type.pipe';

describe('CertificateTypePipe', () => {
  it('create an instance', () => {
    const pipe = new CertificateTypeNamePipe();
    expect(pipe).toBeTruthy();
  });
});
