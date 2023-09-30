function removeEggs(foods, toRemove) {
  let counter = 0;
  return foods.filter((food) => {
    if (counter < 2) {
      food !== toRemove;
      counter ++
    } else {
      food !== toRemove
    }
  });
}

const theFoods = ["apple", "ball", "eggs", "cat", "doggs", "eggs"];

const theString = "eggs";

console.log(removeEggs(theFoods, theString));
