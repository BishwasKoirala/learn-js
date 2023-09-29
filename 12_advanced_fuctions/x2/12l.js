const countPositiveNums = (nums) => {
  let positiveNumbers = 0;
    nums.forEach(element => {
      if (element >= 0) {
        positiveNumbers++;
      } else {
        return;
      }

      })
  return positiveNumbers;
};
const list = [1, 2, 3, 6, -1, -2, -3];
console.log(countPositiveNums(list));
