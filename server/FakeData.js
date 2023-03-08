const userList = [
  {
    id: 1,
    name: "John",
    username: "john",
    age: 20,
    nationality: "CANADA"
  },
  {
    id: 2,
    name: "Nart",
    username: "nart",
    age: 33,
    nationality: "FRANCE"
  },
  {
    id: 3,
    name: "Lucy",
    username: "lucy",
    age: 22,
    nationality: "SOUTHAFRICA",
    friends: [
      {
        name: "Avery",
        age: 29
      },
      {
        name: "Ash",
        age: 26
      }
    ]
  },
  {
    id: 4,
    name: "Chris",
    username: "chris",
    age: 19,
    nationality: "CANADA",
    friends: [
      {
        name: "Riley",
        age: 19
      },
      {
        name: "Penn",
        age: 22
      }
    ]
  },
  {
    id: 5,
    name: "Fridah",
    username: "fridah",
    age: 28,
    nationality: "AUSTRALIA",
    friends: [
      {
        name: "Danielle",
        age: 35
      },
      {
        name: "Pete",
        age: 16
      }
    ]
  },
]

const movieList = [
  {
    name: "Inception",
    yearReleased: 2010,
    blueRayAvailable: true
  },
  {
    name: "Tenet",
    yearReleased: 2020,
    blueRayAvailable: false
  },
  {
    name: "Breaking Bad",
    yearReleased: 2006,
    blueRayAvailable: false
  },
  {
    name: "Pulp Fiction",
    yearReleased: 1993,
    blueRayAvailable: true
  },
  {
    name: "Divergent",
    yearReleased: 2015,
    blueRayAvailable: false
  }
]

module.exports = { userList, movieList };