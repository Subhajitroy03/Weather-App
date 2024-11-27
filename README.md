# Weather App

A simple web application to display the current weather information for any city using the WeatherAPI. 

## Features

- Search weather details for any city worldwide.
- Displays:
  - **City Name** (including region and country)
  - **Temperature** (in °C)
  - **Last Updated Time**
  - **Humidity**
  - **Feels Like Temperature** (in °C)
  - **Precipitation** (in mm)
  - **Wind Speed** (in km/hr)
  - **Current Weather Conditions**

## Technologies Used

- **HTML, CSS, JavaScript**: For building the frontend.
- **WeatherAPI**: For fetching live weather data.
- **RapidAPI**: To access the WeatherAPI service.

## Prerequisites

- A valid API key from [RapidAPI's WeatherAPI](https://rapidapi.com/weatherapi/api/weatherapi-com).

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. Open the `index.html` file in a web browser to run the app.

3. Replace the API key in the `fetchWeather` function if needed:
   ```javascript
   'x-rapidapi-key': '<your_api_key>'
   ```

4. Search for a city using the input field provided on the webpage.

## How to Use

1. Open the application in your browser.
2. Enter the name of the city in the input field.
3. Click on the "Search" button.
4. The app will display the weather details for the entered city.

## Example

- Input: `New York`
- Output:
  - **City Name**: New York, New York, United States
  - **Temperature**: 15°C
  - **Last Updated**: 2024-11-27 10:00 AM
  - **Humidity**: 60%
  - **Feels Like**: 14°C
  - **Precipitation**: 2.5mm
  - **Wind Speed**: 10 km/hr
  - **Conditions**: Cloudy



## Future Enhancements

- Add support for fetching a 7-day weather forecast.
- Include temperature units toggle (°C/°F).
- Enhance the UI for better user experience.

## Author

**Subhajit Roy**  
A second-year CSE student and aspiring backend developer. Enthusiastically exploring tech domains and teaching concepts!  

---

If you like this project, consider ⭐ starring the repository! 😊
