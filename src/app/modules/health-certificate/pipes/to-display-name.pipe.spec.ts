import { ToDisplayNamePipe } from './to-display-name.pipe';

describe('ToDisplayNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ToDisplayNamePipe();
    expect(pipe).toBeTruthy();
  });
});
