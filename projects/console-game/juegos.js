function displayGame(game, mygame) {
  return mygame.innerHTML += `<a class="text-decoration-none" href="detail.html?id=${game.id}"><div class="col">
  <div class="card shadow-sm fondo-tarjeta">
  <img src="${game.background_image}" class="card-img-top" alt="...">
      <div class="card-body">
          <p class="card-text">${game.name}</p>
          <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                  <button type="button" class="btn btn-sm btn-outline-secondary">${game.updated}</button>
                
              </div>
              <small class="text-warning">${game.rating}<span class="material-symbols-outlined">
              star
              </span></small>
          </div>
      </div>
  </div>
</div></a>`;
}

function getgame() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  if (id != null) {
    fetch(
      `https://api.rawg.io/api/games?key=18a952117ef947b0bec7546d25a1c899&language=es&platforms=${id}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let mygame = document.getElementById("games");
        result.results.forEach((game) => {
          displayGame(game, mygame);
        });
      })
      .catch((error) => console.log("error", error));

  } else if (idgen != null) {
    fetch(
      `https://api.rawg.io/api/games?key=18a952117ef947b0bec7546d25a1c899&language=es&genres=${idgen}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let mygame = document.getElementById("games");
        result.results.forEach((game) => {
          displayGame(game, mygame);
        });
      })
      .catch((error) => console.log("error", error));
  } else {
    fetch(
      `https://api.rawg.io/api/games?key=18a952117ef947b0bec7546d25a1c899&language=es`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        let mygame = document.getElementById("games");
        result.results.forEach((game) => {
          displayGame(game, mygame);
        });
      })
      .catch((error) => console.log("error", error));
  }

}



const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get("id");
const idgen = urlParams.get("idgen");

getgame(id, idgen);
