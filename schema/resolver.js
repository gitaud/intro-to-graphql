const { userList, movieList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return userList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(userList, { id: Number(id) });
      return user;
    },
    movies: () => {
      return movieList
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(movieList, { name });
      return movie
    }
  },
  User: {
    favoriteMovie: () => {
      return _.filter(
        movieList, 
        (movie) => 
          movie.blueRayAvailable === false && movie.yearReleased > 2000);
    }
  }
}

module.exports = { resolvers };