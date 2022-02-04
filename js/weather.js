
const API_KEY="580bb1eab5d7d4882b4e79d1acc6aded"

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(Response=>Response.json())
    .then((data)=>{
        const weather=document.querySelector("#weather span:first-child")
        const city=document.querySelector("#weather span:last-child")
       city.innerText=data.name;
       weather.innerText=`${data.weather[0].main}/${data.main.temp}℃`;
    });
  }
  function onGeoError() {
    alert("Can't find you. No weather for you.");
  }
  
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);