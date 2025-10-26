let api_key = "a7f44a715578d31824ab69aeafc9ed80";

// fetching weather data
const fetchData = async() => {
    let searchInput = document.querySelector("#search_input");
    let searchInputVal = searchInput.value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputVal}&appid=${api_key}&units=metric`

    try {
        let res = await fetch(api);
        let data = await res.json()
        console.log("🚀 ~ data:", data);

        // temp details
        let tempDetails = document.querySelector(".temp-details");
        tempDetails.innerHTML = `
        <p>${data.main.temp}&deg;C</p>
        <div>
            <div class="feels-like">
                <p>Feels like</p>
                <p>${data.main.feels_like}&deg;C</p>
            </div>
            <span></span>
            <div class="high-low">
                <p>High / Low</p>
                <p><span>${data.main.temp_max}&deg;</span> / <span>${data.main.temp_min}&deg;</span></p>
            </div>
        </div>
    `

      // weather stats

    let weatherStats = document.querySelector(".weather-stats");
    weatherStats.innerHTML = `
        <div class="stat-card humidity">
                <i class="bi bi-droplet"></i>
                <div class="stat-info">
                    <p class="stat-title">Humidity</p>
                    <h2 class="stat-value">${data.main.humidity}%</h2>
                </div>
            </div>

            <div class="stat-card wind-speed">
                <i class="bi bi-wind"></i>
                <div class="stat-info">
                    <p class="stat-title">Wind Speed</p>
                    <h2 class="stat-value">${data.wind.speed} km/h</h2>
                </div>
            </div>

            <div class="stat-card uv-index">
                <i class="bi bi-brightness-high"></i>
                <div class="stat-info">
                    <p class="stat-title">UV Index</p>
                    <h2 class="stat-value">6</h2>
                </div>
            </div>

            <div class="stat-card precipitation">
                <i class="bi bi-speedometer"></i>
                <div class="stat-info">
                    <p class="stat-title">Pressure</p>
                    <h2 class="stat-value">${((data.main.pressure)/1013.25).toFixed(2)} atm</h2>
                </div>
            </div>

    `

    searchInput.value = "";
    
    } catch (error) {
        console.log(error)
    }
    finally{

    }

    let weatherLocationTime = document.querySelector(".location-time");

    weatherLocationTime.innerHTML = `
                <div>
                    <i class="bi bi-geo-alt"></i>
                    <p>${searchInputVal}</p>
                </div>
                <p>${moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
    `

    // weather details

    let weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.innerHTML = `
        <i class="bi bi-cloud"></i>
        <p>Cloud Type(Sunny or Partly Cloudy)</p>
    `

  

}

// weather details

const weatherDetails = () => {

}
