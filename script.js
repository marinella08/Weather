//Search city
function searchFun(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search");
    let city = document.querySelector("#city");
    city.innerHTML = `${searchInput.value}`;
    let citySearch = `${searchInput.value}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=eadaf9d564268a9d29e613879a48803e`;
    axios.get(apiUrl).then(showWeather);
  }
  
  let search = document.querySelector("#search-form");
  search.addEventListener("submit", searchFun);
  
  //Current time
  function formatDate(date) {
    let currentDate = document.querySelector("#date");
    let currentTime = document.querySelector("#time");
  
    let now = new Date();
    let number = date.getDate();
  
    let day = now.getDay();
    let hour = now.getHours();
    if (hour < 10) {
      hour = `0${hour}`;
    }
  
    let min = now.getMinutes();
    if (min < 10) {
      min = `0${min}`;
    }
  
    let year = date.getFullYear();
    let month = now.getMonth();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wendnesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let Day = days[date.getDay()];
  
    let months = [
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12"
    ];
    let Month = months[date.getMonth()];
  
    currentDate.innerHTML = `${number}/${Month}/${year}`;
    currentTime.innerHTML = `${Day} ${hour}:${min}`;
  }
  
  console.log(formatDate(new Date()));
  
  //MY CURRENT GEOLOCATION
  function showCity(event) {
    event.preventDefault();
  
    function showPosition(position) {
      console.log(position);
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=eadaf9d564268a9d29e613879a48803e`;
      axios.get(apiUrl).then(showTemperature);
    }
    navigator.geolocation.getCurrentPosition(showPosition);
  }
  
  let buttonclick = document.querySelector("#location");
  buttonclick.addEventListener("click", showCity);
  
  function showTemperature(response) {
    let citySearch = response.data.name;
    let searchInput = document.querySelector("#search");
    searchInput.innerHTML = `${citySearch}`;
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${citySearch}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=eadaf9d564268a9d29e613879a48803e`;
    axios.get(apiUrl).then(showWeather);
  }
  
  //SEARCH TEMPERATURE
  function showWeather(response) {
    console.log(response.data);
  
    let temperature = Math.round(response.data.main.temp);
    let tempElment = document.querySelector("#temperature");
    tempElment.innerHTML = `${temperature}°C`;
  
    let feelsLike = Math.round(response.data.main.feels_like);
    let feelsElment = document.querySelector("#feelsLike");
    feelsElment.innerHTML = `${feelsLike} °C`;
  
    let humidity = response.data.main.humidity;
    let humidityElment = document.querySelector("#humidity");
    humidityElment.innerHTML = `${humidity} %`;
  
    let pressure = response.data.main.pressure;
    let pressureElment = document.querySelector("#pressure");
    pressureElment.innerHTML = `${pressure} hPa`;
  
    let wind = Math.round(response.data.wind.speed);
    let windElment = document.querySelector("#wind");
    windElment.innerHTML = `${wind} m/s`;
  
    let description = response.data.weather[0].main;
    let descriptionElment = document.querySelector("#description");
    descriptionElment.innerHTML = `${description}`;
  
    let sunrise = response.data.sys.sunrise;
    let sunriseElment = document.querySelector("#sunrise");
    sunriseElment.innerHTML = `${sunrise}`;
  
    let sunset = response.data.sys.sunset;
    let sunsetElment = document.querySelector("#sunset");
    sunsetElment.innerHTML = `${sunset}`;
  }
  
  