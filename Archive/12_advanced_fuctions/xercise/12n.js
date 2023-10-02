function removeEggs(food, egg) {
  return food.filter((item) => item !== egg);
}

let foods = ["egg", "cat", "meat"];
let eggs = "egg";

console.log(removeEggs(foods, eggs));
