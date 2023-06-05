// plataformas

function getdata() {
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch(
    "https://api.rawg.io/api/platforms?key=18a952117ef947b0bec7546d25a1c899",
    requestOptions
  )
    .then((response) => response.json())
    .then((result) => {
      let midiv = document.getElementById("plataformas");
      result.results.forEach((plataforma) => {
        midiv.innerHTML += `<a href="juegos.html?id=${plataforma.id}"  <div class="col">
        <div class="card shadow-sm cardGeneros">
         <img src="${plataforma.image_background}" class="card-img-top imagenGeneros" >
        <div class="card-body">
        <h3 class="card-text tituloGeneros">${plataforma.name}</h3>
        <div class="d-flex justify-content-between align-items-center">
        </div>
        </div>
        </div>
        </div>
        </div>
        </a>`;
      });
    })
    .catch((error) => console.log("error", error));
}

getdata();

// juegos
