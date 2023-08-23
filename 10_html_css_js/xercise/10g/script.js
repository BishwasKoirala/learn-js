function toggleOn(selector) {
  const button = document.querySelector(selector);

  if (!button.classList.contains("toggled-on")) {
    turnoffOther();

    button.classList.add("toggled-on");
  } else {
    button.classList.remove("toggled-on");
  }
}

// remenber that a function can be runned inside another function

function turnoffOther() {
  const previousButton = document.querySelector(".toggled-on");
  if (previousButton) {
    previousButton.classList.remove("toggled-on");
  }
}
