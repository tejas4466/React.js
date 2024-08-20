import React, { useState } from "react";
import Weather from "./components/Weather";
import Form from "./components/Form";

function App() {
  // State hooks to manage weather data, error messages, and user input
  const [weather, setWeather] = useState(null); // Weather data state
  const [error, setError] = useState(null);     // Error message state
  const [city, setCity] = useState('');         // User input for city state

  // Function to fetch weather data from the API
  const getWeatherData = async (city) => {
    try {
      // Fetch weather data from the API based on the provided city
      const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=495d45e2d19547ffa25161025242706&q=${city}&aqi=no`);

      // Check if the response from the API is successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON data from the response
      const data = await response.json();

      // Update state with fetched weather data and clear any previous errors
      setWeather(data);
      setError(null);
    } catch (error) {
      // Handle errors that occur during fetching or parsing data
      console.error('Error fetching the weather data:', error);

      // Reset weather data to null and set an error message for user feedback
      setWeather(null);
      setError('Error fetching the weather data, Please check location spelling');
    }
  };

  // Handler function to update the city state based on user input
  const handleCityChange = (e) => {
    setCity(e.target.value); // Update city state with the current input value
  };

  // Handler function to handle form submission (getting weather data)
  const handleFormSubmit = (e) => {
    e.preventDefault();   // Prevent default form submission behavior
    getWeatherData(city);  // Call function to fetch weather data based on current city state
  };
  
  return (
    <div 
      className="flex flex-col items-center justify-center w-full h-screen p-6 space-y-8 bg-center bg-no-repeat bg-cover App bg-gradient-to-r from-blue-500 to-blue-900"
    >
      {/* Heading for the weather application */}
      <h1 className="mb-6 text-5xl font-bold text-center text-white">
        <span className="block text-5xl">Your Instant Weather Info</span>
      </h1>

      {/* Form component to input city name and trigger weather fetch */}
      <Form 
        city={city} 
        handleCityChange={handleCityChange} 
        handleFormSubmit={handleFormSubmit} 
        getWeatherData={getWeatherData}
      />

      {/* Component to display weather information */}
      <Weather 
        weather={weather} 
      />

      {/* Display error message if there is an error */}
      {error && <p className="text-lg font-semibold text-red-500">{error}</p>}
    </div>
  );
}

export default App;
