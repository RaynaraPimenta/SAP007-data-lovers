import {} from "./data.js";
import dadosRickAndMorty from "./data/rickandmorty/rickandmorty.js";


function showCards(data) {
  document.getElementById('card-container').innerHTML = data.map((item) => `
    <section id= "card-info" class="card">
        
      <img class="card-img" src="${item.image}">
        
      <section class="container-name">
        <h3 class="name"><strong>${item.name}</strong></h3>
      </section>
      
      <section id="info-card"class="info">
      <p class="list-item">Status: ${item.status}</p>
      <p class="list-item">Gender: ${item.gender}</p>
      <p class="list-item">Species: ${item.species}</p>
      <p class="list-item">Appears in: ${item.episode.length} episodes</p>
      <p class="list-item">Origin: ${item.origin.name}</p>
    </section>
  </section>
      
    </section>
  `).join("");
}

showCards(dadosRickAndMorty.results);

const seletorGenero = document.getElementById("filter-gender"); // CONST COM O SELETOR

seletorGenero.addEventListener("change", (event) => {
  const filtroGenero = dadosRickAndMorty.results.filter((item) => {
    return item.gender === event.target.value
  });
  console.log(filtroGenero);
});

