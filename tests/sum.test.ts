import sum from '../src/sum';

describe('sum function', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('handles negative numbers', () => {
    expect(sum(-1, 5)).toBe(4);
  });
});