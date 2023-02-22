const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User!]
    favoriteMovie: [Movie!]
  }

  type Movie {
    name: String!
    yearReleased: Int!
    blueRayAvailable: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  enum Nationality {
    CANADA
    FRANCE
    SOUTHAFRICA
    AUSTRALIA
  }
`;

module.exports = { typeDefs };