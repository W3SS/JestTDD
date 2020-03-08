import { hello } from './App';

describe('hello', () => {
  it('should be an output of hello function', () => {
    expect(hello()).toBe('Hello');
  });
});
