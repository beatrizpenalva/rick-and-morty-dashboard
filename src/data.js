export const sortByAlphabeticOrder = (data, condition) => {
  const orderAZ = data.sort(function (a, b) {
      if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
      if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
      return 0;
    })
  if (condition === "az") {
    return orderAZ;
  } else {
    return orderAZ.reverse();
  }
};
export const searchByLocation = (data, condition) => {
  const filterLocation = data.filter((item) => ((item.location.name).toUpperCase()).includes(condition.toUpperCase()));
  return filterLocation;
};
export const filterData = (dataBase, type, condition) => {
  const filterResult = dataBase.filter((item) => item[type] === condition);
  return filterResult;
};
export const statisticData = (dataBase, data) => {
  const percentage = Math.round((data.length * 100) / dataBase.length);
  return percentage;
};