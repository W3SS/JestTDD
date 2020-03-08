import { hello, addTwoNumbers, addArrayOfNumbers } from './App';

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

describe('addArrayOfNumbers', () => {
  it('should be an output of addArrayOfNumbers function', () => {
    let array1 = [1,2,3,4,5,6,7]
    let array2 = [12,4,58,79,125]
    let array3 = [1200,135,452,2000,632]
    let array4 = [8,666,12,2,2,2,3,5,2,6,1,52,4]
    expect(addArrayOfNumbers(array1)).toBe(28);
    expect(addArrayOfNumbers(array2)).toBe(278);
    expect(addArrayOfNumbers(array3)).toBe(4419);
    expect(addArrayOfNumbers(array4)).toBe(765);
  });
  it('should not add strings', () => {
    expect(addArrayOfNumbers('2, 2, 3')).toBe(null);
  });
  it('should not add objects', () => {
    expect(addArrayOfNumbers({})).toBe(null);
  });
  it('should not add isolate numbers', () => {
    expect(addArrayOfNumbers(4)).toBe(null);
  });
});
