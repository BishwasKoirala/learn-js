const countPositiveNums = (nums) => {
  let positiveNumbers = 0;
    nums.forEach(num => {
      if (num >= 0) {
        positiveNumbers++;
      }

    })
  return positiveNumbers;
};
const list = [1, 2, 3, 6, -1, -2, -3];
console.log(countPositiveNums(list));
