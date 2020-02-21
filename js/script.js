const url = "https://rickandmortyapi.com/api/character/";

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
       handleJson(json);
    })
    .catch(function(error) {
        window.location.href = "error.html";
    });

function handleJson(json) {
    const resultsContainer = document.querySelector(".results");
    const results = json.results;
    
      
    
    let html = "";
    
    results.forEach(function(result) {
        let type = result.type;
        if(type == "") {
            type = "Undefined"
        }
        html +=  
        `<div class="col-sm-6 col-md-4 col-lg-3">                
            <div class="card">    
                <img class="image" src="${result.image}" alt="Character Name">
                <div class="details">
                    <h4 class="name">${result.name}</h4>
                    <p>Type: ${type}</p>    
                    <p>Episode count: ${result.episode.length}</p>                                  
                    <a class="btn btn-primary" href="details.html?id=${result.id}">Details</a>
                </div>
            </div>
     </div>`;
    });
    
    resultsContainer.innerHTML = html;
}
    


                        


    