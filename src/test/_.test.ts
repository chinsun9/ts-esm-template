import { hello } from '..';

describe('test', () => {
  it('should be 1', () => {
    expect(hello()).toEqual('world');
  });
});
