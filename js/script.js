const params = new URLSearchParams(window.location.search);
const movieId = params.get("movieId");
const movieCategory = params.get("category");
const inputCategory = document.querySelector("#movie-category");
const baseUrl = "https://striveschool-api.herokuapp.com/api/movies/";
const optionsGet = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
  },
};

//Fetch Categories asynch
async function getMoviesByCategory(category) {
  try {
    const response = await fetch(`${baseUrl}${category}/`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
      },
    });
    const movies = await response.json();
    showMovies(movies, category);
  } catch (error) {
    console.error(error.message);
  }
}

async function showMovies(movies, category) {
  const movieContainer = document.getElementById(category);
  movies.forEach((movie) => {
    console.log(movieContainer);
    movieContainer.innerHTML += `<div class="col-md-2 ">
     <a href="details.html?movieId=${movie._id}&category=${movie.category}"><img class="movie-cover" src="${movie.imageUrl}"/></a> 
    </div>`;
  });
}

window.onload = async () => {
  console.log("Am I working?");
  getMoviesByCategory("sci-fi");
  getMoviesByCategory("horror");
  getMoviesByCategory("action");
};
