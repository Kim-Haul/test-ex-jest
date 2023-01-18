// ---------------------------------------------- 1번
const add = (a, b) => {
  return a + b;
};

export default add;

// ---------------------------------------------- 2번
export const getNumbers = () => {
  return fetch('http://localhost:5001/numbers');
};

// ---------------------------------------------- 3번
export const addArrayNumbers = (arr) => {
  let sum = 0;

  arr.map((a) => {
    sum = sum + a;
  });

  return sum;
};
