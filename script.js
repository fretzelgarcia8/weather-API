document.body.style.backgroundImage = 'url("./images/weatherBG.gif")';

const API_KEY = "b3a4a520dadc6605126865c285482dfb";
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const input = document.getElementById("cityInput");
const button = document.getElementById("searchBtn");
const result = document.getElementById("result");
const error = document.getElementById("error");
const loading = document.getElementById("loading");
const refreshBtn = document.getElementById("refreshBtn");

refreshBtn.addEventListener("click", () => {
  location.reload();
});


button.addEventListener("click", () => {
  const city = input.value.trim();

  if (city === "") {
    showError("Please enter a city name");
    return;
  }

  fetchWeather(city);
});

async function fetchWeather(city) {
  try {
    toggleLoading(true);
    button.disabled = true;

    const url =
      `${BASE_URL}?q=${encodeURIComponent(city)},PH&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.message || "Failed to fetch weather data");
    }

    const data = await response.json();
    displayWeather(data);

  } catch (err) {
    showError(err.message);
  } finally {
    toggleLoading(false);
    button.disabled = false;
  }
}

function displayWeather(data) {
  error.textContent = "";
  
  setWeatherBackground(data.weather[0].main);

  const oldCard = document.querySelector(".card");
  if (oldCard) {
    oldCard.classList.add("fade-out");
  }

  setTimeout(() => {
    result.innerHTML = `
      <div class="card">
        <h2>${data.name}</h2>
        <img 
          src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"
          alt="Weather icon"
        />
        <p>${data.weather[0].description}</p>
        <p>🌡 Temperature: ${data.main.temp} °C</p>
        <p>💧 Humidity: ${data.main.humidity}%</p>
      </div>
    `;
  }, 300);
}

function showError(message) {
  result.innerHTML = "";
  error.textContent = message;
}
function toggleLoading(show) {
  if (show) {
    loading.classList.add("show");
  } else {
    loading.classList.remove("show");
  }
}

function setWeatherBackground(weatherMain) {
  let bg = "images/weatherBG.gif";

  switch (weatherMain.toLowerCase()) {
    case "clear":
      bg = "images/sunny.gif";
      break;
    case "clouds":
      bg = "images/cloudy.gif";
      break;
    case "rain":
    case "drizzle":
      bg = "images/rainy.gif";
      break;
    case "thunderstorm":
      bg = "images/thunder.gif";
      break;
    case "snow":
      bg = "images/snow.gif";
      break;
    case "mist":
    case "fog":
    case "haze":
      bg = "images/mist.gif";
      break;
  }

  document.body.style.backgroundImage = `url("./${bg}")`;
}

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "🔊";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "🔇";
  }
});
