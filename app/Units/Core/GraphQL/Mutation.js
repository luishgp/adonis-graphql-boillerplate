const UserMutations = use('App/Units/Auth/GraphQL/Types/UserMutations');
const TodoMutations = use('App/Domains/Todo/GraphQL/Types/TodoMutations');

const Mutation = `
    type Mutation {
        ${UserMutations}
        ${TodoMutations}
    }
`;

module.exports = Mutation;
