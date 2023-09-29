function AddNum(array, num) {
  let addedNum = [];
  array.forEach((element) => {
    addedNum.push(element + num);
  });
  return addedNum;
}

let array1 = [1, 2, 99, -3, 6];
let num1 = 2;

// console.log(AddNum(array1, num1));


// dowith for each
function addNum(array,num) {
  let result = array.map((value) => value + num);
  return result;
};

console.log(addNum(array1,num1))