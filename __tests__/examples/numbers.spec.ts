//groups tests
describe('Compare numbers', () => {
  it('basic usage', () => {
    expect(1 + 1).toBeGreaterThan(1)
    expect(1 + 1).toBeLessThan(3)
  });
});

describe('Mock', () => {
  it('basic usage of mock implementation', () => {
    const fakeAdd = jest.fn().mockImplementation((a, b) => 5)
    expect(fakeAdd(1, 1)).toBe(5)
  });
});
