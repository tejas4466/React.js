import React from 'react';

function Weather({ weather }) {
  // Conditional rendering: If weather data is not yet fetched, return null (component does not render)
  if (!weather) return null;

  return (
    <div className="text-white bg-transparent weather font-['Poppins'] w-[36rem] text-left p-6 space-y-2 text-2xl border-4 border-black mt-[-42px]">

      {/* Displaying weather information */}
      <h2>Weather in {weather.location.name}, {weather.location.region}, {weather.location.country}</h2>
      <h3>Local Time: {weather.location.localtime}</h3>
      <h3>Temperature(°C): {weather.current.temp_c}&deg;C</h3>
      <h3>Temperature(°F): {weather.current.temp_f}&deg;F</h3>
      <div className="flex items-center conditions">
      <h3>Conditions: {weather.current.condition.text}</h3>
      <img src={weather.current.condition.icon} alt="Weather Icon" />
      </div>
      <h3>Wind Speed: {weather.current.wind_kph}kph</h3>
      <h3>Humidity: {weather.current.humidity}</h3>
      
    </div>
  );
}

export default Weather;
