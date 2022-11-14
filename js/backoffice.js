const inputName = document.querySelector("#movie-name");
const inputDescription = document.querySelector("#movie-description");
const inputCategory = document.querySelector("#movie-category");
const inputImg = document.querySelector("#movie-img");
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
// const optionsPost = {
//   method: "POST",
//   headers: {
//     Authorization:
//       "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
//     "Content-Type": "application/json",
//   },
// };

async function onFormSubmit(event) {
  event.preventDefault();

  const newMovie = {
    name: inputName.value,
    description: inputDescription.value,
    category: inputCategory.value,
    imageUrl: inputImg.value,
  };
  console.log(newMovie);

  const options = {
    method: movieId ? "PUT" : "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
    },
    body: JSON.stringify(newMovie),
  };
  try {
    const endpoint = movieId ? `${baseUrl}${movieId}` : `${baseUrl}`;

    const response = await fetch(endpoint, options);
    if (response.ok) {
      alert(
        movieId ? "Movie successfully edited!" : "Movie successfully added!"
      );
      // if {
      // inputName.value = "";
      // inputDescription.value = "";
      // inputCategory.value = "";
      // inputImg.value = "";
    } else {
      throw new Error("Unexpected error has occurred, please try again later");
    }
  } catch (error) {
    console.error(error);
  }
}
window.onload = async () => {
  console.log("Am I working?");
  getMoviesByCategory("sci-fi");
  getMoviesByCategory("horror");
  getMoviesByCategory("action");
  if (movieId) {
    const response = await fetch(`${baseUrl}${movieCategory}`, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
      },
    });
    const movies = await response.json();
    const movie = movies.find((movie) => movie._id === movieId);
    console.log(movies);
    let addMovie = document.getElementById("add-movie");
    addMovie.innerText = "Edit";
    addMovie.classList.remove("btn-primary");
    addMovie.classList.add("btn-success");

    document.querySelector("#movie-name").value = movie.name;
    document.querySelector("#movie-description").value = movie.description;
    document.querySelector("#movie-category").value = movie.category;
    document.querySelector("#movie-img").value = movie.imageUrl;
  }
};
