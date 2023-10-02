const regularFunction = function (param, param2) {
  console.log("hello");
  return 5;
};

//similarities :
// can return , can use params, can be called bu itsname();

const arrowFunction = (param, param2) => {
  console.log("hello");
  return 5;
};
arrowFunction();

// dont need to use brackets when it has only one param!!
const oneParam = (param) => {
  console.log(param + 1);
};
oneParam(2);

// whent the arrow function in 1line ,we dont need curly brackets as well as 'return' word
const oneLine = () => 2 + 3;
console.log(oneLine());
