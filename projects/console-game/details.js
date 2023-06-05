function gamedetail(id) {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };
      
      fetch(`https://api.rawg.io/api/games/${id}?key=18a952117ef947b0bec7546d25a1c899&language=es`, requestOptions)
        .then(response => response.json())
        .then((result) => {
            let migame = document.getElementById("mijuego")
            migame.innerHTML += `<div class="p-5 mb-4 bg-light rounded-3">
            <div class="container-fluid py-5">
           <img class="img-details" src="${result.background_image}" alt="">
            </div>
            </div>
            <div class="row align-items-md-stretch">
          
            <div class="col-md-12">
            <div class="h-100 p-5 bg-light border rounded-3">
            <p >${result.description}</p>
            </div>
            </div>
            </div>`
        })
        .catch(error => console.log('error', error));
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id')

gamedetail(id)