import { hello } from '../index.js';

describe('test', () => {
  it('should be 1', () => {
    expect(hello()).toEqual('world');
  });
});
