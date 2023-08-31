const fruitBasket = {
  apple: 5,
  banana: 3,
  orange: 2
};

console.log(fruitBasket.apple); // Outputs: 5
console.log(fruitBasket['banana']); // Outputs: 3

fruitBasket['grape'] = 10; // Add a new fruit to the basket

delete fruitBasket.orange; // Remove a fruit from the basket

console.log(fruitBasket)
