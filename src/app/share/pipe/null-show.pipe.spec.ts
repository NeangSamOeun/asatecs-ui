import { NullShowPipe } from './null-show.pipe';

describe('NullShowPipe', () => {
  it('create an instance', () => {
    const pipe = new NullShowPipe();
    expect(pipe).toBeTruthy();
  });
});
