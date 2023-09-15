const btnCheckWeather = document.querySelector("#checkWeather");
const inputSearchWeather = document.querySelector("#searchInputWeather");
const weatherImage = document.querySelector("#weather-image");
const temperature = document.querySelector("#temperature");
const cityName = document.querySelector("#city-name");
const humidity = document.querySelector("#humidity");
const wind = document.querySelector("#wind");
const mainWeather = document.querySelector(".weather-main-informations");
const weatherDetails = document.querySelector(".weather-details")
const apiKey = "Insira aqui a sua chave da api";


const checkWeather = async () => {
    try {
        const inputValue = inputSearchWeather.value.trim();
        if (inputValue.length > 0){
            mainWeather.style.display = "flex";
            weatherDetails.style.display = "flex";
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearchWeather.value}&appid=${apiKey}&units=metric`;
            const response = await axios.get(apiUrl);
            console.log(response.data.weather[0].main);
            temperature.textContent = response.data.main.temp + " ° C";
            cityName.textContent = response.data.name;
            humidity.textContent = response.data.main.humidity;
            wind.textContent = response.data.wind.speed;
            
            if(response.data.weather[0].main === "Clouds") {
                weatherImage.src = './images/clouds.png';
            }else if(response.data.weather[0].main === "Clear"){
                weatherImage.src = './images/clear.png';
            }else if(response.data.weather[0].main === "Rain"){
                weatherImage.src = './images/rain.png';
            }else if(response.data.weather[0].main === "Drizzle"){
                weatherImage.src = './images/drizzle.png';
            }else if(response.dat.weather[0].main === "Mist"){
                weatherImage.src = './images/mist.png';
            }    
        }else{
            alert("Insira uma cidade"); 
        }
    } catch (error) {
        console.error("Ocorreu um erro:", error);
        alert("Cidade inválida")
        mainWeather.style.display = "none";
        weatherDetails.style.display = "none";
    }
}

const handlekeyEnter = (e) => {
    if(e.key === "Enter") {
        e.preventDefault();
        checkWeather();
    }
    
} 

inputSearchWeather.addEventListener("keydown", handlekeyEnter)

btnCheckWeather.addEventListener("click", (e) => {
    e.preventDefault();
    checkWeather();
});


