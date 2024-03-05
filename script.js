// Event listener for the theme button to toggle between themes
document.querySelector(".theme-btn").addEventListener("click", function () {
  // Get the root HTML element
  const htmlElement = document.documentElement;
  // Get the current theme class from the HTML element
  const currentTheme = htmlElement.classList[0];

  // Array of available themes
  const themes = ["theme1", "theme2", "theme3"];
  // Find the index of the current theme in the themes array
  const currentIndex = themes.indexOf(currentTheme);
  // Calculate the index of the next theme
  const nextIndex = (currentIndex + 1) % themes.length;
  // Get the next theme from the themes array
  const nextTheme = themes[nextIndex];

  // Remove the current theme class and add the next theme class to the HTML element
  htmlElement.classList.remove(currentTheme);
  htmlElement.classList.add(nextTheme);

  // Define translation values for the theme button
  const translateXValues = ["0px", "22px", "40px"];
  // Get the translation value corresponding to the next theme
  const translateX = translateXValues[nextIndex];

  // Apply the translation to the theme button to visually indicate the current theme
  this.style.transform = `translateX(${translateX})`;
});

// Get the display element
const display = document.querySelector(".display .result");

// Function to append input to the display
function appendToDisplay(input) {
  display.value += input;
}

// Function to delete the last character from the display
function del() {
  display.value = display.value.slice(0, -1);
}

// Function to reset the display
function reset() {
  display.value = "";
}

// Function to evaluate and display the result
function calculate() {
  try {
    // Evaluate the expression entered in the display
    display.value = eval(display.value);
  } catch (error) {
    // If an error occurs during evaluation, display "Error"
    display.value = "Error";
  }
}
