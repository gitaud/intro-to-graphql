const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
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

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = SOUTHAFRICA
  }

  input UpdateUsername {
    id: ID!
    username: String!
  }

  type Mutation {
    createNewUser(input: CreateUserInput!): User!
    updateUsername(input: UpdateUsername!): User!
    deleteUsername(id: ID!): [User]
  }

  enum Nationality {
    CANADA
    FRANCE
    SOUTHAFRICA
    AUSTRALIA
  }
`;

module.exports = { typeDefs };