const apiKey = "8615ba6fd8e853de2fda5f7f9905d764";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherIcon = document.querySelector('.weather-icon');


//How to do in Arrow Function
const checkWeather = async (city) => {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if(response.status === 404){
        document.querySelector('.error').style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        const data = await response.json();

        document.querySelector(".city").innerText = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " kph";

        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = 'images/clouds.png';
        }else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.png";
        }else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.png";
        }else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.png";
        }else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "images/snow.png";
        };

        document.querySelector(".weather").style.display = "block";
        document.querySelector('.error').style.display = "none";

        return data;
    };
};

//Event Listner for Search Box
searchBtn.addEventListener('click', ()=> {
    checkWeather(searchBox.value);
});


//How the Tutorial does it
// async function checkWeather(){
//     const response = await await fetch(apiUrl + `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);
// }

// checkWeather();
