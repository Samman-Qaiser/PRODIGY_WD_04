var apikey="1991bc7f1b1ddfb6b187e62a79aa9095"
var apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="
var input=document.querySelector(".input-city")
var cityhead=document.querySelector(".city-head")
var temp=document.querySelector(".temp")
var weather=document.querySelector(".weather")
var feellike=document.querySelector(".feel-like")
var pressure=document.querySelector(".pressure")
var tempmax=document.querySelector(".temp-max")
var tempmin=document.querySelector(".temp-min")
var humidity=document.querySelector(".humidity")
var sealevel=document.querySelector(".sea-level")
var grndlevel=document.querySelector(".grnd-level")
var speed=document.querySelector(".speed")
var gust=document.querySelector(".gust")
var deg=document.querySelector(".deg")
var img=document.querySelector(".weather-img")
var search=document.querySelector(".ri-search-line")
async function checkweather(city){
 var response= await fetch(apiUrl+city+`&appid=${apikey}`)
 var data=await response.json()
 if(response.status===404){
  document.querySelector(".alert").innerHTML="invalid city name"
 } else{
  document.querySelector(".alert").innerHTML=""
   cityhead.textContent=data.name
   temp.textContent=`${data.main.temp}°C`

   weather.textContent=`Weather :${data.weather[0].main}`
   feellike.textContent=`Feels like :${data.main.feels_like}`
   pressure.textContent=`Pressure :${data.main.pressure}`
   tempmax.textContent=`Temp Max : ${data.main.temp_max}`
    tempmin.textContent=`Temp Min : ${data.main.temp_min}`
   humidity.innerHTML=`<i class="ri-water-percent-fill"></i>Humidity : ${data.main.humidity}`
   sealevel.textContent=`Sea level : ${data.main.sea_level}`
   grndlevel.textContent=`Ground level : ${data.main.grnd_level}`
   speed.textContent=`Speed : ${data.wind.speed} km/hr`
  deg.textContent=` Deg : ${data.wind.deg}`
    gust.textContent=`Gust : ${data.wind.gust}`
    if(data.weather[0].main==='Clouds'){
         img.src="/images/clouds.png"
    }
    else if(data.weather[0].main==='Clear'){
      img.src="/images/clear.png"
 }
 else if(data.weather[0].main==='Rain'){
  img.src="/images/rain.png"
}
else if(data.weather[0].main==='Mist'){
  img.src="/images/mist.png"
}
else if(data.weather[0].main==='Snow'){
  img.src="/images/snow.png"
}
else if(data.weather[0].main==='Humidity'){
  img.src="/images/humidity.png"
}
else if(data.weather[0].main==='Drizzle'){
  img.src="/images/drizzle.png"
}
else if(data.weather[0].main==='Smoke'){
  img.src="smoke.png"
}
else{
    img.src="/images/clouds.png"
}

console
   console.log(data)
   console.log(data.weather[0].main)
}
}
search.addEventListener("click",function(){
  checkweather(input.value)
})

