let api_key = "a7f44a715578d31824ab69aeafc9ed80";

// fetching whether data
const fetchData = async() => {
    // let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput}&appid=${api_key}&units=metric`;
    let searchInput = document.querySelector("#search_input");
    let searchInputVal = searchInput.value;
    let api = `https://api.openweathermap.org/data/2.5/weather?q=${searchInputVal}&appid=${api_key}`

    try {
        let res = await fetch(api);
        let data = await res.json()
        console.log("🚀 ~ data:", data);
    } catch (error) {
        console.log(error)
    }
    finally{

    }
    searchInput.value = "";

    let whetherLocationTime = document.querySelector(".location-time");

    whetherLocationTime.innerHTML = `
        <div name="location-time">
                <div>
                    <i class="bi bi-geo-alt"></i>
                    <p>Mumbai</p>
                </div>
                <p>Time</p>
        </div>
    `

}

// whether details

const whetherDetails = () => {

}
