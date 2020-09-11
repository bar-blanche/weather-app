window.addEventListener("load", () => {
  let lon;
  let lat;
  let city = document.querySelector('.location .city');
  let temperature = document.querySelector('.current .tempertaure');
  let description = document.querySelector('.current .description');

  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', search);

  function search(evn) {
   if (evn.keyCode == 13) {
    console.log(searchbox.value)
  }
 }

 if (navigator.geolocation) {
   navigator.geolocation.getCurrentPosition(position =>{
     lon = position.coords.longitude;
     lat = position.coords.latitude;

     const proxy = "https://cors-anywhere.herokuapp.com";
      const api = `${proxy} https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=9ac781505ec8f26a751667f8113ac72d`
      fetch(api)
   .then(results => {
     return results.json();
    })
    .then(data => {
      console.log(data);
     const {temperture, description} = data.current;
     city.textContent = timezone;
     temperature.textContent = current.temp;
     description_el.textContent = description;
    });
   });
  }
 });
 
