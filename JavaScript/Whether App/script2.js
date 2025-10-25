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
