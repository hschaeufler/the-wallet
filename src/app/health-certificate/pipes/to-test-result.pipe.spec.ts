import { ToTestResultPipe } from './to-test-result.pipe';

describe('ToTestResultPipe', () => {
  it('create an instance', () => {
    const pipe = new ToTestResultPipe();
    expect(pipe).toBeTruthy();
  });
});
