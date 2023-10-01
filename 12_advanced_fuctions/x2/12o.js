function removeEggs(foods, toRemove) {
  let counter = 0;
  return foods.filter((food) => {
    if (food === toRemove && counter < 2) {
      counter ++
      return food !== toRemove;
    } else {
      return food 
    }
  });
}

const theFoods = ["apple", "ball", "eggs", "cat", "doggs", "eggs",'birds','eggs',,'eggs'];

const theString = "eggs";

console.log(removeEggs(theFoods, theString));
