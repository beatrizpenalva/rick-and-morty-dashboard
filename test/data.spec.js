import { filterBySpecies, filterByStatus, filterByGender, searchByLocation, statisticData, sortByAlphabeticOrder } from '../src/data.js';
const dataBaseTest = [
  {
    "id": 1,
    "name": "Rick Sanchez",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
    },
  },
  {
    "id": 2,
    "name": "Morty Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Male",
    "origin": {
      "name": "Earth (C-137)",
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
    },
  },
  {
    "id": 3,
    "name": "Summer Smith",
    "status": "Alive",
    "species": "Human",
    "gender": "Female",
    "origin": {
      "name": "Earth (Replacement Dimension)",
    },
    "location": {
      "name": "Earth (Replacement Dimension)",
    },
  },
];
describe('filter functions', () => {
  it('filterBySpecies is a function', () => {
    expect(typeof filterBySpecies).toBe('function');
  });

  it('if I insert characters and Human should return only Human characters', () => {
    expect(filterBySpecies(dataBaseTest, "Human")).toStrictEqual(dataBaseTest);
  });

  it('filterByStatus is a function', () => {
    expect(typeof filterByStatus).toBe('function');
  });

  it('if I insert characters and Alive should return only Alive characters', () => {
    expect(filterByStatus(dataBaseTest, "Alive")).toStrictEqual(dataBaseTest);
  });

  it('filterByGender is a function', () => {
    expect(typeof filterByGender).toBe('function');
  });

  it('if I insert characters and Female should return only Female characters', () => {
    const resultsFemale = [
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
        },
      },
    ];
    expect(filterByGender(dataBaseTest, "Female")).toStrictEqual(resultsFemale);
  });
});
describe('percentage of filtered characters', () => {
  it('if I insert an Original and a Filtered Array it should return the percentage of filtered itens', () => {
    const resultsFemale = [
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
        },
      },
    ];
    expect(statisticData(dataBaseTest, resultsFemale)).toStrictEqual(33);
  });
});
describe('search filter', () => {
  it('searchByLocation is a function', () => {
    expect(typeof searchByLocation).toBe('function');
  });

  it('if I insert Earth should return characters with Earth in location name', () => {
    expect(searchByLocation(dataBaseTest, "Earth")).toStrictEqual(dataBaseTest);
  });
});
describe('alphabetic order', () => {
  it('sortByAlphabeticOrder is a function', () => {
    expect(typeof sortByAlphabeticOrder).toBe('function');
  });

  it('if I insert "az" it should return the array in alphabetic order"', () => {
    const dataBaseResult = [
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
        },
      },
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
        },
      },
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
        },
      }
    ];
    expect(sortByAlphabeticOrder(dataBaseTest, "az")).toStrictEqual(dataBaseResult);
  });

  it('if I insert "za" it should return the array in reverse alphabetic order"', () => {
    const dataBaseResult = [
      {
        "id": 3,
        "name": "Summer Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Female",
        "origin": {
          "name": "Earth (Replacement Dimension)",
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
        },
      },
      {
        "id": 1,
        "name": "Rick Sanchez",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
        },
      },
      {
        "id": 2,
        "name": "Morty Smith",
        "status": "Alive",
        "species": "Human",
        "gender": "Male",
        "origin": {
          "name": "Earth (C-137)",
        },
        "location": {
          "name": "Earth (Replacement Dimension)",
        },
      }
    ];
    expect(sortByAlphabeticOrder(dataBaseTest, "za")).toStrictEqual(dataBaseResult);
  });
});