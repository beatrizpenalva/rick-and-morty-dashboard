import {
  sortCharacters,
  searchByName,
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
const clearButton = document.getElementById("clear");
const statisticInfo = document.getElementById("results");

window.onload = createCards(characters);
selectGender.addEventListener("change", getAllFilters);
selectStatus.addEventListener("change", getAllFilters);
selectSpecies.addEventListener("change", getAllFilters);
selectSort.addEventListener("change", getAllFilters);
searchOption.addEventListener("keypress", getAllFilters);
clearButton.addEventListener("click", clearFilters);

function createCards(data) {
  statisticInfo.innerHTML = "";
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
  filterResult = searchByName(filterResult, searchOption.value);
  filterResult = sortCharacters(filterResult, selectSort.value);

  if (!filterResult) {
    statisticInfo.innerHTML =
      "Sorry, there is no character with these characteristics. Please, try with other filters.";
  } else {
    const percentage = statisticData(characters, filterResult);
    createCards(filterResult);
    printStatistic(percentage);
  }
}

function printStatistic(result) {
  const results = document.createElement("p");
  const content = document.createTextNode(
    `${result}% of characters have these characteristics`
  );
  results.appendChild(content);
  statisticInfo.appendChild(results);
}

function clearFilters() {
  selectGender.value = "";
  selectStatus.value = "";
  selectSpecies.value = "";
  searchOption.value = "";
  selectSort.value = "";
  statisticInfo.innerHTML = "";

  createCards(characters);
}

// window.onload = requestCharacters(1);
// para cada página que passar da página mudar o valor da requisição tb

// function requestCharacters(page) {
//   fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
//     .then((response) => response.json())
//     .then((json) => json.results) //mandar pro createCards
//     .catch(console.log("deu ruim")); //melhorar a mensagem para o usuário
// }

const paginationState = {
  page: 1,
  perPage: 20,
  totalPage: Math.ceil(characters.length / perPage),
};

const html = {
  get(element) {
    return document.querySelector(element);
  },
};

const controlsPagination = {
  next() {
    paginationState.page++;
    const isLastPage = paginationState.page > paginationState.totalPage;
    if (isLastPage) {
      paginationState.page--;
    }
  },
  prev() {
    paginationState.page--;
    const isFirstPage = paginationState.page < paginationState.page;
    if (isFirstPage) {
      paginationState.page++;
    }
  },
  goTo(page) {
    if (page < 1) page = 1;
    paginationState.page = page;
    if (page > paginationState.totalPage)
      paginationState.page = paginationState.totalPage;
  },
  createListeners() {
    html.get("#first").addEventListener("click", () => {
      controlsPagination.goTo(1);
      update();
    });

    html.get("#last").addEventListener("click", () => {
      controlsPagination.goTo(paginationState.totalPage);
      update();
    });

    html.get("#next").addEventListener("click", () => {
      controlsPagination.next();
      update();
    });

    html.get("#prev").addEventListener("click", () => {
      controlsPagination.prev();
      update();
    });
  },
};

function update() {
  console.log(paginationState.page);
}

// function init() {
//   controlsPagination.createListeners();
// }
