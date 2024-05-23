function fetchWeatherData(city) {
    const apiKey = 'YOUR_API_KEY';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    return fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('Weather data fetched:', data);
        return data;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  function processWeatherData(data) {
    return new Promise((resolve, reject) => {
      if (!data || !data.main || !data.weather) {
        reject('Invalid data');
      } else {
        const processedData = {
          temperature: data.main.temp,
          condition: data.weather[0].description,
          city: data.name
        };
        console.log('Processed data:', processedData);
        resolve(processedData);
      }
    });
  }
  function saveWeatherData(data) {
    return new Promise((resolve, reject) => {
      console.log('Saving data...');
      setTimeout(() => {
        // Simulate success or failure
        const success = true; // Change to false to simulate an error
        if (success) {
          console.log('Data saved successfully');
          resolve('Data saved successfully');
        } else {
          reject('Failed to save data');
        }
      }, 2000); // Simulate 2 seconds delay
    });
  }
  function getAndSaveWeatherData(city) {
    fetchWeatherData(city)
      .then(data => processWeatherData(data))
      .then(processedData => saveWeatherData(processedData))
      .then(saveMessage => {
        console.log(saveMessage);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
getAndSaveWeatherData('London');

