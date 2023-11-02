let btn = document.getElementById("btn");
let output = document.getElementById("outputText");

let number = Math.floor(Math.random() * 50);

btn.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;

  if (isNaN(input) || input < 1 || input > 100) {
    output.innerHTML =
      "Invalid input. Please enter a number between 1 and 100.";
  } else if (input == number) {
    output.innerHTML = `Winner, winner chicken dinner! The correct answer was indeed ${number}.`;
  } else if (input < number) {
    output.innerHTML = "The number you've entered is too low, loser!";
  } else {
    output.innerHTML = "The number you've entered is too high, loser!";
  }
});
