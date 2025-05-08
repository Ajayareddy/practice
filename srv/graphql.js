const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const cds = require('@sap/cds');

const typeDefs = gql`
  type TestBook {
    ID: ID!
    title: String
    author: String
  }

  type Query {
    books: [TestBook]
  }
`;

const resolvers = {
  Query: {
    books: async () => {
      const db = await cds.connect.to('db');
      const books = await db.run(SELECT.from('TestService.TestBooks'));
      return books;
    },
  },
};

async function startGraphQL(app) {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();
  server.applyMiddleware({ app, path: '/graphql' });
}

module.exports = startGraphQL;
