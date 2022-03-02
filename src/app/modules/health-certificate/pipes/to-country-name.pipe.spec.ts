import { ToCountryNamePipe } from './to-country-name.pipe';

describe('ToCountryNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ToCountryNamePipe();
    expect(pipe).toBeTruthy();
  });
});
