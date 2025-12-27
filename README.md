# 🌦 Interactive Glassmorphism Weather App

A modern, sleek Weather Application featuring a **Glassmorphism UI** and dynamic environmental effects. This app provides real-time weather data with a unique twist: the entire background theme and background music toggle adapt to create an immersive user experience.

## ✨ Features

* **Real-Time Weather Data**: Fetches live temperature, humidity, and weather conditions using the OpenWeather API.
* **Dynamic Backgrounds**: The background automatically changes to a matching GIF (Sunny, Rainy, Cloudy, etc.) based on the current weather status of the searched city.
* **Glassmorphism Design**: A frosted-glass aesthetic using `backdrop-filter`, soft borders, and translucent layers for a premium look.
* **Immersive Audio**: Includes a background music player ("Journey of Life") with a dedicated toggle button to enhance the atmosphere.
* **Interactive UI**:
* Smooth **Fade-in/Fade-out** animations for weather cards.
* Quick **Refresh** button to reset the application state.
* Fully **Responsive** layout for mobile and desktop viewing.


* **Smart Search**: Optimized to search for cities specifically within the Philippines (PH) region by default.

---

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser and a local folder containing the necessary image assets.

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/your-username/interactive-weather-app.git

```


2. **Asset Setup**:
Ensure you have an `images/` folder containing:
* `weatherBG.gif` (Default)
* `sunny.gif`, `cloudy.gif`, `rainy.gif`, `thunder.gif`, `snow.gif`, `mist.gif`
* `Journey of Life.mp3` (Background music)


3. **Launch**:
Open `index.html` in your browser.

---
## DEMO
[weatherAPI.webm](https://github.com/user-attachments/assets/69c8c47b-9570-4e21-b236-52fd0c72fe3c)

## 🛠️ Built With

* **HTML5**: Semantic structure and audio integration.
* **CSS3**: Custom properties, Glassmorphism effects, and CSS Keyframe animations.
* **JavaScript (ES6)**: Asynchronous `fetch` calls, dynamic DOM manipulation, and event handling.
* **API**: [OpenWeatherMap API](https://openweathermap.org/api).

---

## 📂 Project Structure

* `index.html`: The main structure featuring the search interface and audio controls.
* `style.css`: The styling engine, handling the glass effect, layout, and mobile responsiveness.
* `script.js`: The logic engine that handles API requests, background switching, and loading states.

---

## 📝 License & Use

This project is **not licensed** and is provided for **educational purposes only**. It was developed as a study in integrating third-party APIs with interactive CSS styling.

---
