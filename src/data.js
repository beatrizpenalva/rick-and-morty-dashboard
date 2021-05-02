export const sortCharacters = (database, condition) => {
  if (!condition) return database;

  if(condition === "az" || condition === "za") {
    const orderAZ = database.sort(function (a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    });

    if(condition === "az") return orderAZ;
    
    return orderAZ.reverse();
  }
  else {
    const orderNumberOfEpisodes = database.sort(function (a, b) {
      if (a.episode.length > b.episode.length) return -1;
      if (a.episode.length < b.episode.length) return 1;
      return 0;
    });

    if(condition ==="highest-fewer") return orderNumberOfEpisodes;
    return orderNumberOfEpisodes.reverse();
  }
};

export const searchByName = (database, condition) => {
  if (!condition) return database;
  const filterByName = database.filter((item) =>
    item.name.toUpperCase().includes(condition.toUpperCase())
  );
  return filterByName;
};

export const filterData = (database, type, condition) => {
  if (!condition) return database;
  const filterResult = database.filter((item) => item[type] === condition);
  return filterResult;
};

export const statisticData = (database, dataFiltered) => {
  const percentage = ((dataFiltered.length * 100) / database.length).toFixed(2);
  return percentage;
};
