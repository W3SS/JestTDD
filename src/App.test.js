import { hello, addTwoNumbers } from './App';

describe('hello', () => {
  it('should be an output of hello function', () => {
    expect(hello()).toBe('Hello');
  });
});

describe('addTwoNumbers', () => {
  it('should be an output of addTwoNumbers function', () => {
    expect(addTwoNumbers(1,2)).toBe(3);
    expect(addTwoNumbers(3,4)).toBe(7);
    expect(addTwoNumbers(5,9)).toBe(14);
    expect(addTwoNumbers(-5,9)).toBe(4);
    expect(addTwoNumbers(-2,-2)).toBe(-4);
  });
  it('should not add strings', () => {
    expect(addTwoNumbers(2,'2')).toBe(null);
  });
  it('should not add objects', () => {
    expect(addTwoNumbers(2,{})).toBe(null);
  });
  it('should not add arrays', () => {
    expect(addTwoNumbers(2,[])).toBe(null);
  });
});