import {sortByAlphabeticOrder, searchByLocation, statisticData, filterData} from './data.js';
import data from './data/rickandmorty/rickandmorty.js';
import dataEpisode from './data/rickandmorty/rickandmortyepisodes.js';
const characters = data.results;
const getEpisodes = dataEpisode.episodesList;
window.onload = createCards(characters);
document.getElementById("order").addEventListener("change", getSort);
document.getElementById("search").addEventListener("keypress", getSearch);
document.getElementById("gender").addEventListener("change", getGender);
document.getElementById("status").addEventListener("change", getStatus);
document.getElementById("species").addEventListener("change", getSpecies);
function createCards(data) {
  document.getElementById("results").innerHTML = "";
  let printCards = "";
  for (let item of data) {
    let firstEpisode = (item.episode[0]).substr(40, 39);
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
              <br>
                <h4 class="subtitle"> Species: </h4>
                  <p class="data" id="species">${item.species}</p>
              </br>
              <br>
                <h4 class="subtitle"> Gender: </h4>
                <p class="data" id="gender">${item.gender}</p>
              </br>
              <br>
                <h4 class="subtitle"> Origin: </h4>
                  <p class="data" id="origin">${item.origin.name}</p>
              </br>
              <br>
                <h4 class="subtitle"> Location: </h4>
                  <p class="data" id="location">${item.location.name}</p></br>
              <br>
                <h4 class="subtitle"> Status: </h4>
                  <p class="data" id="status">${item.status}</p>
              </br>
            </div>  
          </div>        
        </div>
      </div>`
  }
  document.getElementById("cardArea").innerHTML = printCards;
}
function getSort() {
  const orderOption = document.getElementById("order").value;
  const resultOrder = sortByAlphabeticOrder(characters, orderOption);
  createCards(resultOrder);
}
function getSearch() {
  const searchOption = document.getElementById("search").value;
  const resultSearch = searchByLocation(characters, searchOption);
  createCards(resultSearch);
}
function getGender() {
  const gender = document.getElementById("gender").value;
  const resultFilter = filterData(characters, "gender", gender);
  const percentage = statisticData(characters, resultFilter);
  createCards(resultFilter);
  printStatistic (percentage, gender);
}
function getStatus() {
  const status = document.getElementById("status").value;
  const resultFilter = filterData(characters, "status", status);
  const percentage = statisticData(characters, resultFilter);
  createCards(resultFilter);
  printStatistic (percentage, status);
}
function getSpecies() {
  const species = document.getElementById("species").value;
  const resultFilter = filterData(characters, "species", species);
  const percentage = statisticData(characters, resultFilter);
  createCards(resultFilter);
  printStatistic (percentage, species);
}
function printStatistic(result, filter) {
  const results = document.createElement("p");
  const content = document.createTextNode(`${result}% of the characters are ${filter.toLowerCase()}`);
  results.appendChild(content);
  document.getElementById("results").appendChild(results);
}