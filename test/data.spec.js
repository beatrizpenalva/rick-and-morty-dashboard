import { filterData, searchByLocation, statisticData, sortByAlphabeticOrder } from '../src/data.js';
import { dataBaseTest, resultFemale, dataBaseAZ, resultStatistic } from '../test/testdata.js';
describe('filter functions', () => {
  it('should return only Human characters', () => {
    expect(filterData(dataBaseTest, "status", "Alive")).toStrictEqual(dataBaseTest);
  });
});
describe('percentage of filtered characters', () => {
  it('should return 25', () => {
    expect(statisticData(dataBaseTest, resultFemale)).toStrictEqual(resultStatistic);
  });
});
describe('search filter', () => {
  it('should return characters with Earth in location name', () => {
    expect(searchByLocation(dataBaseTest, "EARTH")).toStrictEqual(dataBaseTest);
  });
});
describe('alphabetic order', () => {
  it('should return the array in alphabetic order"', () => {
    expect(sortByAlphabeticOrder(dataBaseAZ, "az")).toStrictEqual(dataBaseAZ);
  });
  it('should return the array in reverse alphabetic order"', () => {
    expect(sortByAlphabeticOrder(dataBaseAZ, "za")).toStrictEqual(dataBaseAZ.reverse());
  });
});