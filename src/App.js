export const hello = () => 'Hello';

export const addTwoNumbers = (arg1, arg2) => {
  if (typeof arg1 !== 'number' || typeof arg2 !== 'number') {
    return null
  }
  return arg1 + arg2;
};

export const addArrayOfNumbers = (arrayArg) => {
  if (!Array.isArray(arrayArg)) { return null }
  const reducer = (accumulator, currentValue) => accumulator + currentValue;
  return arrayArg.reduce(reducer);
}
 
export const removeSNames = names => {
  if (!Array.isArray(names)) { return null }
  return names.filter(name => name.charAt(0).toLowerCase() !== 's');
};

export const checkPalindrome = (inputString) => {
  if (typeof inputString !== 'string') { return null}
  return [...inputString].reverse().join('') === inputString;
};