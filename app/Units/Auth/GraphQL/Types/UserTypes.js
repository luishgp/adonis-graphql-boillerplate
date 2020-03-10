module.exports = `
    # User definition type
    type User {
        id: Int!
        username: String!
        email: String!
        created_at: String
    }

    type UserLoggedIn {
        id: Int!
        username: String!
        email: String!
        created_at: String
        token: String
    }
`;
