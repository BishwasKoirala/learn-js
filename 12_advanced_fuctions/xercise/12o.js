function removeEggs(food, egg) {
  let counter = 0;
  let result = [];
  for (let i of food) {
    if (i === egg && counter < 2) {
      counter++;
    } else {
      result.push(i);
    }
  }
  return result;
}

let foods = ["egg", "cat", "meat", "egg", "egg", "egg"];
let eggs = "egg";

console.log(removeEggs(foods, eggs));
