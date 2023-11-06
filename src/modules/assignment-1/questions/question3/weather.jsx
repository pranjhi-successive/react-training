const Weather = ({ temperature }) => {
  let message;
  if (temperature > 25) {
    message = "It's sunny today!";
  } else if (temperature < 10) {
    message = "It's cold today!";
  } else {
    message = "The weather is moderate today.";
  }
  return (
    <div className="weather">
      <p>Temperature: {temperature}°C</p>
      <p>{message}</p>
    </div>
  );
};
export default Weather;
