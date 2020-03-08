import { 
  hello, addTwoNumbers, addArrayOfNumbers, 
  removeSNames, checkPalindrome 
} from './App';

describe('hello', () => {
  it('should be an output of hello function', () => {
    expect(hello()).toBe('Hello');
  });
});

describe('addTwoNumbers', () => {
  it('should be an output of addTwoNumbers function', () => {
    expect(addTwoNumbers(1, 2)).toBe(3);
    expect(addTwoNumbers(3, 4)).toBe(7);
    expect(addTwoNumbers(5, 9)).toBe(14);
    expect(addTwoNumbers(-5, 9)).toBe(4);
    expect(addTwoNumbers(-2, -2)).toBe(-4);
  });
  it('should not add strings', () => {
    expect(addTwoNumbers(2, '2')).toBe(null);
  });
  it('should not add objects', () => {
    expect(addTwoNumbers(2, {})).toBe(null);
  });
  it('should not add arrays', () => {
    expect(addTwoNumbers(2, [])).toBe(null);
  });
});

describe('addArrayOfNumbers', () => {
  it('should be an output of addArrayOfNumbers function', () => {
    let array1 = [1, 2, 3, 4, 5, 6, 7]
    let array2 = [12, 4, 58, 79, 125]
    let array3 = [1200, 135, 452, 2000, 632]
    let array4 = [8, 666, 12, 2, 2, 2, 3, 5, 2, 6, 1, 52, 4]
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

describe('removeSNames', () => {
  it('should be remove s names', () => {
    const names = ['Mark', 'George', 'Sasha', 'Seymour'];
    expect(removeSNames(names)).not.toContain('Seymour');
    expect(removeSNames(names)).not.toContain('Sasha');
  });
  it('should not remove other names', () => {
    const names = ['Mark', 'George', 'Sasha', 'Seymour'];
    expect(removeSNames(names)).toContain('George');
    expect(removeSNames(names)).toContain('Mark');
  });
  it('should account for case', () => {
    const names = ['Mark', 'sasha', 'Sasha', 'Seymour'];
    expect(removeSNames(names)).not.toContain('sasha');
    expect(removeSNames(names)).not.toContain('Sasha');
  });
});

describe('checkPalindrome', () => {
  it('should check if a string is a palindrome', () => {
    expect(checkPalindrome('eye')).toBeTruthy();
    expect(checkPalindrome('anna')).toBeTruthy();
    expect(checkPalindrome('racecar')).toBeTruthy();
    expect(checkPalindrome('somethinggnihtemos')).toBeTruthy();
    expect(checkPalindrome('saippuakivikauppias')).toBeTruthy();
  });
  it('should check false results', () => {
    expect(checkPalindrome('nope')).toBeFalsy();
    expect(checkPalindrome('1456585')).toBeFalsy();
    expect(checkPalindrome('~!!!!~!')).toBeFalsy();
    expect(checkPalindrome('something')).toBeFalsy();
    expect(checkPalindrome('almostomla')).toBeFalsy();
    expect(checkPalindrome('STEVENnevets')).toBeFalsy();
    expect(checkPalindrome(' STEVEN nevets ')).toBeFalsy();
    expect(checkPalindrome('-Steven-nevets-')).toBeFalsy();
    expect(checkPalindrome('not a palindrome')).toBeFalsy();
    expect(checkPalindrome('0_0 (: /-\ :) 0–0')).toBeFalsy();
    expect(checkPalindrome('never odd or even')).toBeFalsy();
    expect(checkPalindrome('1 eye for of 1 eye.')).toBeFalsy();
    expect(checkPalindrome('My age is 0 , 0 si ega ym.')).toBeFalsy();
    expect(checkPalindrome('A man, a plan, a canal. Panama')).toBeFalsy();
  });
  it('should not check numbers', () => {
    expect(checkPalindrome(151)).toBeFalsy();
  });
  it('should not check objects', () => {
    expect(checkPalindrome({})).toBeFalsy();
  });
  it('should not check arrays', () => {
    expect(checkPalindrome([])).toBeFalsy();
  });
});