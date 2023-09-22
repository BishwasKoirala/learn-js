function removeEggs (foods,eggs) {
  let removedEggs = 0;
  return foods.filter((index) => {
    if (index === eggs && removedEggs < 2) {
      removedEggs++;
      return false
      // dont return value if the meets the condition
    }
    // else , return it!!
    return true
  }) ;
}

let foodArray = ["apple","juice","egg","orange","egg","pineapple","egg"]

let eggVar = "egg"

console.log(removeEggs(foodArray,eggVar))