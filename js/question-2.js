const apiUrl =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key=943c43debb9840d891d0f2287a92dc7f";

const createHtmlHere = document.querySelector(".results");

async function getGames() {
  const response = await fetch(apiUrl);

  const result = await response.json();

  const games = result.results;

  createHtmlHere.innerHTML = "";

  for (let i = 0; i < games.length; i++) {
    {
      if (i === 8) break;
    }

    createHtmlHere.innerHTML += `<div class="results"> Name: ${games[i].name}
     Rating: ${games[i].rating}
     Number of tags: ${games[i].tags.length} </div>`;
  }
}

getGames();
