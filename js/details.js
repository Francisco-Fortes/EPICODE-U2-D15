const params = new URLSearchParams(window.location.search);
const movieId = params.get("movieId");
const movieContainer = document.getElementById("movie-form");
const optionsDel = {
  method: "DELETE",
  headers: {
    "Content-Type": "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
  },
};

//WIP: Filter method
async function getMovie() {
  try {
    const response = await fetch(
      `https://striveschool-api.herokuapp.com/api/movies/${movieId}`,
      {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
        },
      }
    );
    const movies = await response.json();
    const movie = movies.find((movie) => movie._id === movieId);
    console.log(movie);
    return movie;
  } catch (error) {
    console.error(error.message);
  }
}

function renderMovie(movie) {
  movieContainer.innerHTML = `
  <div><h1>${movie.name}<h1>
  <div
    class="d-flex justify-content-around"
    id="movieCoverContainer"
  >
    <img
      id="movieCoverDetails"
      src="${movie.imageUrl}"
      alt="${movie.name} cover"
    />
  </div>`;
}

// movieContainer.innerHTML = `<div class="form-group text-light pt-3">
//   <label for="event-cover">Cover</label>
//   <div
//     class="d-flex justify-content-around"
//     id="movieCoverContainer"
//   >
//     <img
//       class="m-auto"
//       id="movieCoverDetails"
//       src="${movie.imageUrl}"
//       alt="${movie.name} cover"
//     />
//   </div>
// </div>
// <div class="form-group text-light pt-3">
//   <label for="event-name">Name</label>
//   <input type="text" class="form-control" id="movie-name" />${movie.name}
// </div>
// <div class="form-group text-light">
//   <label for="event-description">Description</label>
//   <textarea
//     class="form-control"
//     id="movie-description"
//   >${movie.description}</textarea>
// </div>
// <div class="form-group text-light">
//   <label for="event-category">Category</label>
//   <input type="text" class="form-control" id="movie-category" />${movie.category}
// </div>
// <div class="form-group text-light">
//   <label for="event-id">Image(Url)</label>
//   <input type="text" class="form-control" id="movie-id" />${movie._id}
// </div>`;
// }

function onEdit() {
  window.location.assign(`backoffice.html?movieId=${movieId}`);
}

async function onDelete() {
  try {
    if (confirm("Do you really want to delete this movie?")) {
      optionsDel;
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/movies/${movieId}`,
        options
      );
      if (response.ok) {
        window.location.assign("index.html");
      } else {
        alert("Error while deleting!");
      }
    }
  } catch (error) {
    alert(`Error: ${error}`);
  }
}

window.onload = async () => {
  const movie = await getMovie();
  renderMovie(movie);
};
