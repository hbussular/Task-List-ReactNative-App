//groups tests
describe('equality', () => {
  it('basic usage of toEqual', () => {
    expect(1 + 1).toEqual(2)
    expect('developer').toEqual('developer')
    expect({name: 'developer'}).toEqual({name: 'developer'})
  });

  //toBe ain't good to be used to compare objects. last expect should fail
  // it('basic usage of toBe', () => {
  //   expect(1 + 1).toBe(2)
  //   expect('developer').toBe('developer')
  //   expect({name: 'developer'}).toBe({name: 'developer'})
  // });
});
