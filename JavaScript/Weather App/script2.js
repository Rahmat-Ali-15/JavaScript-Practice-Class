let api_key = "a7f44a715578d31824ab69aeafc9ed80";

// fetching weather data
const fetchData = async () => {
  let searchInput = document.querySelector("#search_input");
  let searchInputVal = searchInput.value;
  searchInputVal =
    searchInputVal.charAt(0).toUpperCase() + searchInputVal.slice(1);

  let api = `https://api.openweathermap.org/data/2.5/forecast?q=${searchInputVal}&units=metric&appid=${api_key}`;

  let loading = document.querySelector(".loading");

  try {
    loading.style.display = "block";
    loading.innerText = "Loading...";

    let res = await fetch(api);
    let data = await res.json();

    if (data.cod !== "200") {
      loading.innerText = "City not found!";
      searchInput.value = "";
      return;
    }

    loading.style.display = "none";

    hourlyForcast(data);

    console.log("🚀 ~ data:", data.list);

    // weather details

    let weatherIcon = document.querySelector(".weather-icon");
    weatherIcon.innerHTML = `
            <img src="https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="weather icon">
            <p>${data.list[0].weather[0].description}</p>
        `;

    // temp details
    let tempDetails = document.querySelector(".temp-details");
    tempDetails.innerHTML = `
        <p>${data.list[0].main.temp}&deg;C</p>
        <div>
            <div class="feels-like">
                <p>Feels like</p>
                <p>${data.list[0].main.feels_like}&deg;C</p>
            </div>
            <span></span>
            <div class="high-low">
                <p>High / Low</p>
                <p><span>${data.list[0].main.temp_max}&deg;</span> / <span>${data.list[0].main.temp_min}&deg;</span></p>
            </div>
        </div>
    `;

    // weather stats

    let weatherStats = document.querySelector(".weather-stats");
    weatherStats.innerHTML = `
        <div class="stat-card humidity">
                <i class="bi bi-droplet"></i>
                <div class="stat-info">
                    <p class="stat-title">Humidity</p>
                    <h2 class="stat-value">${data.list[0].main.humidity}%</h2>
                </div>
            </div>

            <div class="stat-card wind-speed">
                <i class="bi bi-wind"></i>
                <div class="stat-info">
                    <p class="stat-title">Wind Speed</p>
                    <h2 class="stat-value">${data.list[0].wind.speed} km/h</h2>
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
                    <h2 class="stat-value">${(
                      data.list[0].main.pressure / 1013.25
                    ).toFixed(2)} atm</h2>
                </div>
            </div>

    `;

    searchInput.value = "";
  } catch (error) {
    console.log(error);
    loading.innerText = "Something went wrong!";
  } finally {
    setTimeout(() => {
      loading.style.display = "none";
    }, 2000);
  }

  let weatherLocationTime = document.querySelector(".location-time");

  weatherLocationTime.innerHTML = `
                <div>
                    <i class="bi bi-geo-alt"></i>
                    <p>${searchInputVal}</p>
                </div>
                <p>${moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
    `;
};

// weather details

const hourlyForcast = (data) => {
  console.log("🚀 ~ data:", data);

  // data.forEach((el)=> {

  // })
};
