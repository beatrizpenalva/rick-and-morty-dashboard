import {
  sortCharacters,
  searchByLocation,
  statisticData,
  filterData,
} from "./data.js";
import data from "./data/rickandmorty/rickandmorty.js";
import dataEpisode from "./data/rickandmorty/rickandmortyepisodes.js";

const characters = data.results;
const getEpisodes = dataEpisode.episodesList;
const selectGender = document.getElementById("gender");
const selectStatus = document.getElementById("status");
const selectSpecies = document.getElementById("species");
const searchOption = document.getElementById("search");
const selectSort = document.getElementById("order");

window.onload = createCards(characters);
selectGender.addEventListener("change", getAllFilters);
selectStatus.addEventListener("change", getAllFilters);
selectSpecies.addEventListener("change", getAllFilters);
selectSort.addEventListener("change", getAllFilters);
searchOption.addEventListener("keypress", getAllFilters);

function createCards(data) {
  document.getElementById("results").innerHTML = "";
  let printCards = "";

  for (let item of data) {
    let firstEpisode = item.episode[0].substr(40, 39);
    const episodeIndex = firstEpisode - 1;

    printCards += `
      <div class="flip">
        <div class="card">
          <div class="cardFront">  
            <div class="image" style="background-image: url(${item.image})"></div>
            <div class="text">
                <h3 class="name">${item.name}</h3>
                <h4 class="subtitle"> First time seen: </h4>
                  <p class="dataEpisode"> ${getEpisodes[episodeIndex].episode} - ${getEpisodes[episodeIndex].name}</p>
            </div>
          </div>
          <div class="cardBack">
            <div class="textBack">
              <h3 class="name">${item.name}</h3>
              
              <h4 class="subtitle"> Species: </h4>
              <p class="data" id="species">${item.species}</p>
              
              <h4 class="subtitle"> Gender: </h4>
              <p class="data" id="gender">${item.gender}</p>

              <h4 class="subtitle"> Origin: </h4>
              <p class="data" id="origin">${item.origin.name}</p>
                
              <h4 class="subtitle"> Location: </h4>
              <p class="data" id="location">${item.location.name}</p></br>
                
              <h4 class="subtitle"> Status: </h4>
              <p class="data" id="status">${item.status}</p>
                
              <h4 class="subtitle"> Appears in: </h4>
              <p class="data" id="status">${item.episode.length} episodes</p>
            </div>  
          </div>        
        </div>
      </div>`;
  }

  document.getElementById("cardArea").innerHTML = printCards;
}

function getAllFilters() {
  let filterResult = characters;
  filterResult = filterData(filterResult, "gender", selectGender.value);
  filterResult = filterData(filterResult, "status", selectStatus.value);
  filterResult = filterData(filterResult, "species", selectSpecies.value);
  filterResult = searchByLocation(filterResult, searchOption.value);
  filterResult =  sortCharacters(filterResult, selectSort.value);

  const percentage = statisticData(characters, filterResult);

  createCards(filterResult);
  printStatistic(percentage);
}

function printStatistic(result) {
  const results = document.createElement("p");
  const content = document.createTextNode(
    `${result}% of characters have these characteristics`
  );
  results.appendChild(content);
  document.getElementById("results").appendChild(results);
}
