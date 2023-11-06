## Weather App Documentation

---

### Introduction

This Weather App is a React-based application that provides comprehensive weather information using the WeatherApi.com API. It offers users a detailed and visually appealing insight into real-time weather conditions, hourly and weekly forecasts, and much more.

---

### Features

1. **Geolocation-Based Weather Data**: The app fetches the current location of the user (upon granting permission) to display the most relevant weather data for their area.
2. **User Location Input**: Users have the flexibility to search for weather data from different locations worldwide using the search input at the top of the application.
3. **24-Hour Temperature Forecast**: Stay informed with a detailed hourly temperature forecast to better plan your day.
4. **7-Day Temperature Outlook**: Gain a broader perspective with a 7-day forecast, giving you insights for the week ahead.
5. **Real-time Weather Insights**: Get up-to-the-minute data on temperature, humidity, UV index, wind details, and more.
6. **Animated Weather Icons**: Experience a lively user interface with animated icons tailored for every type of weather condition.
7. **Responsive Background**: Immerse yourself with the app's dynamic background that adapts based on the prevailing weather conditions and time.

---

### Getting Started

#### Prerequisites

1. Node.js and npm should be installed on your system.
2. You'll need an API key from WeatherApi.com.

#### Setup

1. **Clone the Repository**: 

    ```bash
    git clone https://github.com/EladPi/Weather-App
    cd Weather-App
    ```

2. **Install Dependencies**:

    ```bash
    npm install
    ```

3. **Setup the API Key**:

    - First, visit [WeatherApi.com](https://www.weatherapi.com/) and sign up for a free account.
    - Once registered and logged in, navigate to the 'API Keys' tab.
    - Click on 'Create a New Key' and follow the steps.
    - With your API key in hand, locate the `api.js` file in your project directory. Within this file, find the line:

      ```javascript
      const API_KEY = '';
      ```

      Insert your API key between the quotes.

4. **Run the App**:

    ```bash
    npm start
    ```

    The development server will start, and your app should launch in your default web browser. If not, manually visit `http://localhost:3000`.

---

### Acknowledgments

- The weather data is from [WeatherApi.com](https://www.weatherapi.com/) API.

---

Make sure to replace placeholders such as `[repository-link]` and `[repository-name]` with the appropriate information from your GitHub repository. If you have a specific license or an issues page, ensure you update their links in the documentation too.
