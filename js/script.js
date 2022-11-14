const inputCategory = document.querySelector("#movie-category");
const baseUrl = "https://striveschool-api.herokuapp.com/api/movies/";
const optionsGet = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
  },
};
const params = new URLSearchParams(window.location.search);
const movieId = params.get("movieId");
const movieCategory = params.get("category");

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

// categoryContainer = querySelectorAll(.)
// const category = categoryContainer.innerText
// // Fetch Movies synch
// async function getMovies() {
//   try {
//     const unreadableData = await fetch(
//       `"https://striveschool-api.herokuapp.com/api/movies/${category}"`,
//       options
//     );
//     const movies = await unreadableData.json();
//     console.log("getCateg");
//     console.log(movies);
//     movies.forEach((movie) => {
//       let movieContainer = document.createElement("div");
//       movieContainer.classList.add("col-md-2");
//       movieContainer.innerHTML = `<a href="details.html?movieId=${movie._id}"><img class="movie-cover" src="${movie.imageUrl}"/></a>`;
//     });
//   } catch (error) {
//     console.log(error);
//   }
// }
// let movieContainer = document.createElement("div");
// movieContainer.classList.add("col-md-2");
// movieContainer.innerHTML = `<a href="details.html?movieId=${movie._id}"><img class="movie-cover" src="${movie.imageUrl}"/></a>`;
// });
// async function getMoviesCategory(category) {
//   try {
//     const response = await fetch(
//       `"https://striveschool-api.herokuapp.com/api/movies/${category}"`,
//       optionsGet
//     );
//     const movies = await response.json();
//     console.log(movies);
//     displayMovies(movies, category);
//   } catch (err) {
//     console.error(err.message);
//   }
// }

// async function displayMovies(movies, category) {
//   const categoryContainer = document.getElementById(category);
//   console.log(categoryContainer);
//   movies.forEach((movie) => {
//     categoryContainer.innerHTML += `
//     <div class="col-md-2 ">
//     <a href="details.html?movieId=${movie._id}"><img class="movie-cover" src="${movie.imageUrl}"/></a>
//     </div>`;
//   });
// }

window.onload = async () => {
  console.log("Am I working?");
  getMoviesByCategory("sci-fi");
  getMoviesCategory("horror");
  getMoviesCategory("action");
};
