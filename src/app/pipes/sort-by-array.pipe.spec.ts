import { SortDocumentsByArrayPipe } from './sort-by-array.pipe';

describe('SortByArrayPipe', () => {
  it('create an instance', () => {
    const pipe = new SortDocumentsByArrayPipe();
    expect(pipe).toBeTruthy();
  });
});
