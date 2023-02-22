const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema/typedefs");
const { resolvers } = require("./schema/resolver");

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({url}) => {
  console.log(`YOUR GRAPHQL API IS RUNNING AT ${url}`);
})