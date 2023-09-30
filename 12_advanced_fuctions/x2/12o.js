function removeEggs(foods, toRemove) {
  let counter = 0;
  return foods.filter((food) => {
    if (counter < 2) {
      return food !== toRemove;
      counter ++
    } else {
      return food !== toRemove
    }
  });
}

const theFoods = ["apple", "ball", "eggs", "cat", "doggs", "eggs",'birds','eggs',,'eggs'];

const theString = "eggs";

console.log(removeEggs(theFoods, theString));
