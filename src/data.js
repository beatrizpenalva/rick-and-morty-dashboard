export const sortCharacters = (database, condition) => {
  if (condition === "episodes") {
    const orderNumberOfEpisodes = database.sort(function (a, b) {
      if (a.episode.length > b.episode.length) return -1;
      if (a.episode.length < b.episode.length) return 1;
      return 0;
    });

    return orderNumberOfEpisodes;
  } else {
    const orderAZ = database.sort(function (a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    });

    if (condition === "az") {
      return orderAZ;
    } else {
      return orderAZ.reverse();
    }
  }
};

export const searchByLocation = (database, condition) => {
  if (!condition) return database
  const filterLocation = database.filter((item) =>
    item.location.name.toUpperCase().includes(condition.toUpperCase())
  );
  return filterLocation;
};

export const filterData = (database, type, condition) => {
  if(!condition) return database
  const filterResult = database.filter((item) => item[type] === condition);
  return filterResult;
};

export const statisticData = (database, dataFiltered) => {
  const percentage = Math.round((dataFiltered.length * 100) / database.length);
  return percentage;
};
