//Search city

function search(city) {
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=eadaf9d564268a9d29e613879a48803e`;
    axios.get(apiUrl).then(showWeather);
}

function handleSubmit(event) {
    event.preventDefault();
    let cityInputElement = document.querySelector("#search");
    let city = document.querySelector("#city");
    city.innerHTML = `${cityInputElement.value[0].toUpperCase()}${cityInputElement.value.substring(1)}`; 
  //let city = `${cityInputElement.value}`;
    search(cityInputElement.value);
    console.log (cityInputElement);  
}
    search("Kiev");  

  let form = document.querySelector("#search-form");
  form.addEventListener("submit", handleSubmit);



 //MY CURRENT GEOLOCATION
function showCity(event) {
   event.preventDefault();
 }
function showPosition(position) {
      console.log(position);
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=eadaf9d564268a9d29e613879a48803e`;
      axios.get(apiUrl).then(showTemperature);
    }
    navigator.geolocation.getCurrentPosition(showPosition);
  
function showTemperature(response) {
    let citySearch = response.data.name;
    let searchInput = document.querySelector("#search");
    searchInput.innerHTML = `${citySearch}`;
    let h2 = document.querySelector("h2");
    h2.innerHTML = `${citySearch}`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=eadaf9d564268a9d29e613879a48803e`;
    axios.get(apiUrl).then(showWeather);
  }




  
  //Current time
  function formatDate(date) {
    let currentDate = document.querySelector("#date");
    let currentTime = document.querySelector("#time");
  
    let now = new Date();
    let number = date.getDate();
    if (number < 10) {
        number = `0${number}`;
      }
  
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
  
    let description = response.data.weather[0].description;
    let descriptionElment = document.querySelector("#description");
    descriptionElment.innerHTML = `${description}`;
  
    let sunrise = response.data.sys.sunrise;
    let sunriseCal = new Date((sunrise + response.data.timezone) * 1000);
    let h = "0" + sunriseCal.getHours()
    let m = "0" + sunriseCal.getMinutes()
    let t = h + ":" + m.substr(-2)
    let sunriseElment = document.querySelector("#sunrise");
    sunriseElment.innerHTML = `${t}`;
  
    let sunset = response.data.sys.sunset;
    let sunsetCal = new Date((sunset + response.data.timezone) * 1000);
    let hour = sunsetCal.getHours()
    let min = "0" + sunsetCal.getMinutes()
    let time = hour + ":" + min.substr(-2)
   
    let sunsetElment = document.querySelector("#sunset");
    sunsetElment.innerHTML = `${time}`;



    //ICON 
   // let description = response.data.weather[0].description;
    let iconElment = document.querySelector("#icon");
    if (description !== "clear sky") {
    iconElment.setAttribute("src",`https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/168/original/01d.png?1656677804`) ;
    }
    if (description !== "few clouds") {
        iconElment.setAttribute("src",`https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/169/original/02d.png?1656677813`) ;
        } else 
        if (description == "scattered clouds") {
            iconElment.setAttribute("src",`https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/170/original/03d.png?1656677822`) ;
        } else
        if (description == "broken clouds" == "overcast clouds") {
            iconElment.setAttribute("src",`https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/171/original/04d.png?1656677838`) ;
        } else
        if (description == "shower rain" == "light intensity drizzle" == "drizzle" == "heavy intensity drizzle" == "light intensity drizzle rain" == "drizzle rain" == "heavy intensity drizzle rain" == "shower rain and drizzle" == "heavy shower rain and drizzle" == "shower drizzle" == "heavy intensity shower rain" == "ragged shower rain") {
            iconElment.setAttribute("src",`https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/172/original/09d.png?1656677847`) ;
        } else
        if (description == "rain"== "light rain	"== "moderate rain"== "heavy intensity rain"== "very heavy rain"== "extreme rain") {
            iconElment.setAttribute("src",`https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/173/original/10d.png?1656677854`) ;
        } else
        if (description == "thunderstorm"  == "thunderstorm with light rain"== "thunderstorm with rain" == "thunderstorm with heavy rain"== "light thunderstorm" == "heavy thunderstorm"== "ragged thunderstorm	" == "thunderstorm with light drizzle" == "thunderstorm with drizzle" == "thunderstorm with heavy drizzle") {
            iconElment.setAttribute("src",`https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/174/original/11d.png?1656677860`) ;
        } else
        if (description == "snow" == "light snow"== "Snow" == "Heavy snow"== "Sleet" == "Light shower sleet"== "Shower sleet" == "freezing rain"== "Light rain and snow"== "Rain and snow" == "Light shower sleet"== "Shower snow" == "Heavy shower snow") {
            iconElment.setAttribute("src",` https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/175/original/13d.png?1656677869`) ;
        } else
        if (description == "mist" == "tornado"== "squalls" == "volcanic ash"== "dust" == "sand"== "fog" == "sand/ dust whirls"== "Haze" == "Smoke") {
            iconElment.setAttribute("src",`https://s3.amazonaws.com/shecodesio-production/uploads/files/000/039/316/original/50d.png?1656854718`) ;
        } else {
            iconElment.innerHTML = null;
        }
     
    
}
