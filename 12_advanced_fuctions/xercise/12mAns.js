console.log('hello')
function addNum(array, num) {
  return array.map((value) => value + num);
  
}

let anarray = [1, 2, 3, 4, 5];
let anum = 1;

console.log(addNum(anarray, anum))