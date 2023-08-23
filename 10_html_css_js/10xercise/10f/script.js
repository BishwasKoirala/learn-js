function toggleOn(selector) {
  const button = document.querySelector(selector);

  if (!button.classList.contains("toggled-on")) {
    button.classList.add("toggled-on");
  } else {
    button.classList.remove("toggled-on");
  }
}