const apiKey = "111e52c038fb6d0465724e9369a37adf";
const getWeatherButton = document.getElementById("getWeather")
const locationInput = document.getElementById("location")
const cityElement = document.getElementById("city")
const temperatureElement = document.getElementById("temperature")
const descriptionElement = document.getElementById("description");
const resultContainer = document.querySelector(".result")

getWeatherButton.addEventListener('click', () => {
  const location = locationInput.value;

  // fetch Weather data from the apiKey
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`)
    .then((response) => response.json())
    .then((data) => {
      cityElement.textContent = `City: ${data.name}`
      temperatureElement.textContent = `Temperature: ${Math.round(data.main.temp - 273.15)}°C`;
      descriptionElement.textContent = `Description: ${data.weather[0].description}`;
      resultContainer.style.display = "block"
    })
    .catch((error) => {
      console.error("Error fetching data:" + error);
      alert("Error fetching weather data. please check the location and try again")
  })

})