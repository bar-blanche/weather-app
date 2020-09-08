const api ={
  key: "9ac781505ec8f26a751667f8113ac72d",
  base: "https://openweathermap.org/data/2.5/"
}
//validating the search box
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.keyCode == 13) {
    getResults(searchbox.value);
  }
}
//to get search results
 function getResults (query) {
   fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
   .then(Weather => {
     return Weather.json();
   }).then(displayResults);
 }

 function displayResults(weather) {
   let city = document.querySelector('.location .city');
   city.innerText =`${weather.name}, ${weather.sys.country}`;

   let now = newDate();
   let date = document.querySelector('.location .date');
   date.innerText =  dateBuilder(now);

   let temp = document.querySelector('.current .temp');
   temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

   let weather_el =document.querySelector('.current .weather');
   weather_el.innerText = weather.weather[0].main;

   let hilow = document.querySelector('.hi-low');
   hilow.innerText = `${weather.main.temp_min}°c / ${weather.main.temp_max}°c`;
}

