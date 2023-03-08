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
  },
  Mutation: {
    createNewUser: (parent, args) => {
      const newUser = {
        name: args.input.name,
        username: args.input.username,
        age: Number(args.input.age),
        nationality: args.input.nationality
      };
      const lastId = userList.length + 1;
      newUser.id = lastId;
      userList.push(newUser);
      return newUser;
    },
    updateUsername: (parent, args) => {
      const userIndex = userList.findIndex(user => user.id === Number(args.input.id));
      userList[userIndex].username = args.input.username;
      return userList[userIndex];
    },
    deleteUsername: (parent, args) => {
      const id = args.id;
      _.remove(userList, { id: Number(id)});
      return userList;
    }
  }
}

module.exports = { resolvers };