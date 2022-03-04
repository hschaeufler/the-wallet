import { VaccineManufacturerPipe } from './VaccineManufacturer.pipe';

describe('ManufacturerPipe', () => {
  it('create an instance', () => {
    const pipe = new VaccineManufacturerPipe();
    expect(pipe).toBeTruthy();
  });
});
