function getgenres() {
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };

    fetch("https://api.rawg.io/api/genres?key=cb78a2f1d84e47b086f84a8630ab1c6a&", requestOptions)
        .then(response => response.json())
        .then((result) => {
            let mygenres = document.getElementById("genres");
            result.results.forEach((genre) => {
                mygenres.innerHTML += `<a href="juegos.html?idgen=${genre.id}">   
                <div class="col">
            <div class="card shadow-sm cardGeneros">
             <img src="${genre.image_background}" class="card-img-top imagenGeneros" >
            <div class="card-body">
            <h3 class="card-text tituloGeneros">${genre.name}</h3>
            <div class="d-flex justify-content-between align-items-center">
            </div>
            </div>
            </div>
            </div>
            </div>
        
         
        </a>`;

            })

        })
        .catch(error => console.log('error', error));

}

getgenres();