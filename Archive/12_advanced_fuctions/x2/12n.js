// as it has only one statement inside so ,no return inside arrow func
function removeEggs(foods,toRemove) {
  return foods.filter((food)=>
    food !== toRemove
  );
}

const theFoods = ['apple','ball','eggs','cat','doggs','eggs']

const theString = 'eggs'

console.log(removeEggs(theFoods,theString))