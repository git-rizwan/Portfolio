// Default conversion mode
let isFahrenheitToCelsius = true;

// Function to convert Fahrenheit to Celsius
function convertFahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

// Function to convert Celsius to Fahrenheit
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Update conversion based on the current mode
function updateConversion() {
  const temperatureInput = parseFloat(
    document.getElementById("temperature").value
  );
  const resultDisplay = document.getElementById("result");

  if (isNaN(temperatureInput)) {
    resultDisplay.textContent = "";
    return;
  }

  let convertedTemperature;
  if (isFahrenheitToCelsius) {
    convertedTemperature = convertFahrenheitToCelsius(temperatureInput);
    resultDisplay.textContent = `${temperatureInput}°F is ${convertedTemperature.toFixed(
      2
    )}°C`;
  } else {
    convertedTemperature = convertCelsiusToFahrenheit(temperatureInput);
    resultDisplay.textContent = `${temperatureInput}°C is ${convertedTemperature.toFixed(
      2
    )}°F`;
  }
}

// Listen for input changes in the temperature input field
document
  .getElementById("temperature")
  .addEventListener("input", updateConversion);

// Toggle button functionality
document
  .getElementById("equilibriumBtn")
  .addEventListener("click", function () {
    isFahrenheitToCelsius = !isFahrenheitToCelsius; // Toggle the mode
    const title = document.getElementById("title");
    const buttonLabel = document.getElementById("equilibriumBtn");

    if (isFahrenheitToCelsius) {
      title.textContent = "Fahrenheit to Celsius Converter";
      buttonLabel.textContent = "Switch to Celsius to Fahrenheit";
    } else {
      title.textContent = "Celsius to Fahrenheit Converter";
      buttonLabel.textContent = "Switch to Fahrenheit to Celsius";
    }

    document.getElementById("temperature").value = ""; // Clear the input field
    document.getElementById("result").textContent = ""; // Clear the result display
  });

// Reset button functionality
document.getElementById("resetBtn").addEventListener("click", function () {
  document.getElementById("temperature").value = ""; // Clear the input field
  document.getElementById("result").textContent = ""; // Clear the result display
});
