const userTypeDefs = `#graphql

    # Base schema with common fields
    type Base {
        id: ID!
        createdAt: String!
        updatedAt: String!
    }

    # User schema extending Base
    type User {
        id: ID!
        email: String!
        password: String!
        createdAt: String!
        updatedAt: String!
    }

    # Root Query
    type Query {
        getUserById(id: ID!): User
        getUsers: [User]
    }

    # Root Mutation
    type Mutation {
        # Example mutation to create a new user
        createUser(
            email: String!,
            password: String!
        ): User
        deleteUserById(
            id: ID!
        ): User
        updateUserById(
            id: ID!,
            email: String!,
            password: String!
        ): User
    }
`;

export default userTypeDefs;