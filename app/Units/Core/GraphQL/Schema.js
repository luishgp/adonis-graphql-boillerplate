const { makeExecutableSchema } = require('graphql-tools');
const { merge } = require('lodash');

const Query = require('./Query');
const Mutation = require('./Mutation');

const UserTypes = use('App/Units/Auth/GraphQL/Types/UserTypes');
const TodoTypes = use('App/Domains/Todo/GraphQL/Types/TodoTypes');

const UserResolver = use('App/Units/Auth/GraphQL/Resolvers/UserResolver');
const TodoResolver = use('App/Domains/Todo/GraphQL/Resolvers/TodoResolver');

// Define our schema using the GraphQL schema language
const typeDefs = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`;

const resolvers = merge(
  UserResolver,
  TodoResolver,
);

module.exports = makeExecutableSchema({
  typeDefs: [typeDefs, Query, Mutation, UserTypes, TodoTypes],
  resolvers,
});
