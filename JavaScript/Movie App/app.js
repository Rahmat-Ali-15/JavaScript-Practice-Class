const api_key = `3e431991`;
let movieUrl = `https://omdbapi.com/?apikey=${api_key}`;

async function movieApp(defaultSearch = "") {
  let search = defaultSearch || document.getElementById("search").value; // defaultSearch parameter is used for showing Avengers movie while loading the webpage
  let type = document.getElementById("select_type")?.value || "";
  let year = document.getElementById("year_input")?.value || "";
  // console.log(search);
  const main = document.getElementById("container");

  // Show loading message before fetch

  main.innerHTML = `<p style="color:white; font-size:20px; width: 88vw; text-align:center;">Loading...</p>`;

  // Check if search is empty (only for user search, not default load)

  if (!defaultSearch && search === "") {
    alert("Please enter a movie name to search.");
    return; // stop the function here
  }

  let api = movieUrl + `&s=${search}&y=${year}&type=${type}`;

  try {
    let res = await fetch(api);
    let data = await res.json();
    console.log(data.Search);
    foundMovie(data.Search);

    //  Clear the search input after showing results
    if (!defaultSearch) {
      document.getElementById("search").value = "";
      document.getElementById("year_input").value = "";
      // document.getElementById("select_type").value = "All Type"
    }
  } catch (error) {
    console.log(error);
  }
}

function foundMovie(value) {
  let main = document.getElementById("container");
  main.innerHTML = ""; // clear previous results

  value.forEach((el) => {
    let div = document.createElement("div");
    div.className = "parent_container";
    let div2 = document.createElement("div");
    div2.className = "p_h5_container";

    let Title = document.createElement("h5");
    let Year = document.createElement("p");
    let imdbID = document.createElement("p");
    let Type = document.createElement("p");
    let Poster = document.createElement("img");

    Title.innerText = `Title: ${el.Title}`;
    Year.innerText = `Year: ${el.Year}`;
    imdbID.innerText = `IMDB ID: ${el.imdbID}`;
    Type.innerText = `Type: ${el.Type}`;
    Poster.src = `${el.Poster}`;
    Poster.style.cursor = "pointer";

    Poster.style.cursor = "pointer";
    Poster.addEventListener("click", function () {
      movieDescription(el.imdbID);
    });

    div2.append(Title, Year, imdbID, Type);
    div.append(div2, Poster);
    main.append(div);
  });
}

async function movieDescription(id) {
  let descriptionAPI = `https://omdbapi.com/?apikey=3e431991&i=${id}`;

  try {
    let res = await fetch(descriptionAPI);
    let description = await res.json();
    movieDetails(description);
  } catch (error) {
    console.log(error);
  }
}

function movieDetails(val) {
  let modalContainer = document.querySelector(".modal-container");
  let modalContent = document.createElement("div");
  modalContent.classList.add("show_modal");
  modalContainer.innerHTML = ""; // clear previous results

  let runtime = val.Runtime;
  let totalMin = parseInt(runtime);

  let hours = Math.floor(totalMin / 60);
  let remainingMin = totalMin % 60;

  let finalRuntime = `${hours}h ${remainingMin}m`;

  modalContent.innerHTML = `
        <div class="movie-img-div">
            <img src=${val.Poster} alt="" />
        </div>
        <div class="movie-description-div">
            <div class="modal-up">
                <div class="movie-title-div">
                    <p class="movie-title">${val.Title}</p>
                    <p class="release-year">${val.Year}</p>
                </div>
                <div class="ginerDiv">
                    <p>${val.Genre.split(",")[0]}</p>
                    <p>${val.Genre.split(",")[1]}</p>
                    <p>${val.Genre.split(",")[2]}</p>
                </div>
                <div class="rating-runtime-div">
                    <div class="rating-div">
                        <p class="rating-start-icon">⭐</p>
                        <div>
                            <p><span id="given_rating">${
                              val.Ratings[0].Value.split("/")[0]
                            }</span> / <span id="ratig_outOf">10</span></p>
                            <p class="imdb-rating">IMDb rating</p>
                        </div>
                    </div>
                    <div class="divider"></div>
                    <div class="runtime-div">
                        <p class="movie-runtime">${finalRuntime}</p>
                        <p class="runtime">Runtime</p>
                    </div>
                </div>
            </div>
            <div class="movie-description">
                <div class="director-details">
                    <p class="movie-info-title">Director</p>
                    <p class="movie-info-value">${val.Director}</p>
                </div>
                <div class="movie-info-section">
                    <p class="movie-info-title">Cast</p>
                    <p class="movie-info-value">${val.Actors}</p>
                </div>
                <div class="plot-section">
                    <p class="movie-info-title">Plot</p>
                    <p class="movie-info-value">${val.Plot}</p>
                </div>
            </div>
            <div class="modal-footer">
                <div class="movie-btn movie-btn-trailer">
                    <i class="bi bi-play-fill"></i>
                    <button>Watch Trailer</button>
                </div>
                <div class="movie-btn movie-btn-watchlist">
                    <p class="add-watchlist">+</p>
                    <button class="watchlist-btn">Add to Watchlist</button>
                </div>
            </div>
        </div>
        <div class="cross-btn">
            <p>X</p>
        </div>
    `;

  modalContainer.append(modalContent);
  let cancelBtn = document.querySelector(".cross-btn");
  cancelBtn.addEventListener("click", () => {
      modalContent.classList.add("close-modal")
  })
}


// Avengers word will show in the movie name input
/*window.onload = function () {
    document.getElementById("search").value = "Avengers";
    movieApp();
};*/

// Avengers word will not show in the movie name input

window.onload = function () {
  movieApp("Avengers"); // But don't show it in the input
};
