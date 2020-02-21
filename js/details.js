let url_string = window.location.href;

let url = new URL(url_string);

let id = url.searchParams.get("id");

const apiUrl = "https://rickandmortyapi.com/api/character/" + id;

fetch(apiUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
       handleJson(json);
    })
    .catch(function(error) {
       window.location.href = "error.html";
       console.log(error);
    });
    
function handleJson(json) {
    const resultsContainer = document.querySelector(".content");
    document.querySelector("title").innerHTML = json.name;
    console.log(json);
    
      
    
    let html = `<div class="detail-container">
    <img class="details-image" src=" ${json.image}" alt="Character Name" />
    <div class="detail-details">
        <h1> ${json.name} </h1>
        <p>Status: <span class="value" id="status"> ${json.status} </span></p>
        <p>Species: <span class="value" id="species"> ${json.species} </span></p>
        <p>Origin: <span class="value" id="origin"> ${json.origin.name} </span></p>
        <p>Location: <span class="value" id="location"> ${json.location.name} </span></p>                   
    </div>
</div>`;

    resultsContainer.innerHTML = html;
}
    
   