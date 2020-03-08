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