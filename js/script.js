//If genre is included(genres fetch) then push movie into genre fetch

//else genre is not included on (genres fetch) then create the genre and then do the if statement

//Fetch Genres
fetch("https://striveschool-api.herokuapp.com/api/movies/", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
  },
})
  .then((response) => response.json())
  .then((categories) => console.log(categories));

//Fetch Movies
fetch("https://striveschool-api.herokuapp.com/api/movies/horror", {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
  },
})
  .then((response) => response.json())
  .then((movies) => console.log(movies));

async function onFormSubmit(event) {
  event.preventDefault();

  const newMovie = {
    name: document.querySelector("#movie-name").value,
    description: document.querySelector("#movie-description").value,
    category: document.querySelector("#movie-category").value,
    imageUrl: document.querySelector("#movie-image").value,
  };
  console.log(newMovie);
}

window.onload = async () => {
  console.log("Am I working?");
};
