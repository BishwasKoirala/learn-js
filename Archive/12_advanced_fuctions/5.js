[
  'make dinner',
  'wash dishes',
  'watch youtube'
].forEach((value,index) => {
    if (value === 'wash dishes') {
      return;
    };
    console.log(value);
    console.log(index);
  }
)
