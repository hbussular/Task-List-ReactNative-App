export function add(x: number, y: number) {
  return x + y;
}

//groups tests
describe('calculator', () => {
  it('add numbers', () => {
    expect(add(1, 3)).toEqual(4)
  });



});
