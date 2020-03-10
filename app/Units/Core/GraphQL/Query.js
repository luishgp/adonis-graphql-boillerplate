const UserQueries = use('App/Units/Auth/GraphQL/Types/UserQueries');
const TodoQueries = use('App/Domains/Todo/GraphQL/Types/TodoQueries');

const Query = `
    type Query {
        ${UserQueries}
        ${TodoQueries}
    }
`;

module.exports = Query;
