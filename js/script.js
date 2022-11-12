const inputCategory = document.querySelector("#movie-category");
const baseUrl = "https://striveschool-api.herokuapp.com/api/movies/";
// const keyHeaders =
// const methodPostPut =
//Create a carrousel for each genre

//If genre is included(genres fetch) then push movie into genre fetch

//else genre is not included on (genres fetch) then create the genre and then do the if statement

//Fetch Genres

fetch(baseUrl, {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
  },
})
  .then((response) => response.json())
  .then((categories) => console.log(categories));

//     container.innerHTML += `<div class="card col-sm-6 col-md-4 col-lg-3" style="width: 18rem;">
//       <img src="${movie.img}" class="card-img-top" alt="${movie.title}+ cover">
//       <div class="card-body">
//         <h5 class="card-title">${book.title}</h5>
//         <span class="card-text">${book.category}</span>
//         <span class="card-text">${book.price}</span>
//         <div class="d-flex justify-content-between">
//     <button type="button" class="btn btn-primary">Add to cart</button>
//     <button type="button" class="btn btn-secondary">Skip</button>
//   </div>;
//         <div>
//       </div>
//     </div>`;
//   });
// };

//Fetch Movies synch
const getMovies = fetch(
  "https://striveschool-api.herokuapp.com/api/movies/horror",
  {
    method: "GET",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
    },
  }
)
  .then((response) => response.json())
  .then((movies) => console.log(movies));

//Fetch Movies asynch
// const getMovies = async () => {
//     let unreadableData = await fetch(
//         "https://striveschool-api.herokuapp.com/api/movies/horror", {
//         method: "GET",
//         headers: {
//           Authorization:
//             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
//         }),
//         let movies = await unreadableData.json();
//         console.log(books);
// };

const renderMovies = (arrayOfMovies) => {
  arrayOfMovies.forEach((movie) => {
    console.log("Inside the forEach()");
    console.log(movie);
    console.log(movie.name);
  });
};

async function onFormSubmit(event) {
  event.preventDefault();

  const newMovie = {
    name: document.querySelector("#movie-name").value,
    description: document.querySelector("#movie-description").value,
    category: inputCategory.value,
    imageUrl: document.querySelector("#movie-img").value,
  };

  console.log(newMovie);

  fetch(baseUrl, {
    method: "POST",
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZjkxYmQ0YmUzZDAwMTU4NDYwMWQiLCJpYXQiOjE2NjgwODYwNDMsImV4cCI6MTY2OTI5NTY0M30.eZMhitUsKsTXuw2pPSDdb8s15TKDisvdmrvS1a_vuKk",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newMovie),
  });
  //     .then((res) => res.json())
  //     .then((data) => callback(null, data));
}
window.onload = async () => {
  console.log("Am I working?");
};
