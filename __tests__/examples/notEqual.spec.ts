//groups tests
describe('Is not a method', () => {
  it('basic usage of not', () => {
    expect(1 + 1).not.toEqual(3)
  });
});

describe('Match regular expressions', () => {
  it('basic usage of toMatch', () => {
    expect('developer').toMatch(/\w+/) //w* checks strings/words
  });
});
