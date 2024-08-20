import React from 'react';
import Button from '@mui/material/Button';

function Form({ city, handleCityChange, handleFormSubmit, getWeatherData}) {
    const handleSubmit = (e) => {
        e.preventDefault(); // Prevents the default form submission behavior
        handleFormSubmit(); // Calls the parent component's handleFormSubmit function
      };
  return (
    <form onSubmit={handleSubmit} className="form font-['Poppins'] space-x-1 text-white">
      {/* Input field for entering the location */}
      <input
        type="text"
        value={city}               // Binds the input value to the 'city' prop received from the parent component
        placeholder="Enter Location Name"  // Placeholder text displayed when the input field is empty
        onChange={handleCityChange} // Calls 'handleCityChange' function when the input value changes
        className="box-border p-2 text-white bg-transparent border-4 border-black input"          // Applies 'input' class for styling (assuming it's defined in CSS)
      />
      <button 
      type="submit"
      onClick={()=>{getWeatherData(city)}}
      className='text-white bg-gray-800 h-[3.5rem] p-2 text-center w-[10rem] text-xl hover:bg-gray-900'
      >Get Weather</button>
    </form>
    
  );
}

export default Form;
