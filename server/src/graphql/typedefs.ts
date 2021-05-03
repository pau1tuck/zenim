import { gql } from "apollo-server-express";

const typeDefs = gql`
    type User {
        id: Int!
        givenName: String
        familyName: String
        city: String
        country: String
        email: String
        password: String
        verified: Boolean
        roles: [String]
        facebookId: String
        googleId: String
        twitterId: String
        createdAt: String!
        updatedAt: String
    }

    input UserInput {
        givenName: String!
        familyName: String!
        city: String
        country: String!
        email: String!
        password: String!
        verified: Boolean
        roles: [String]
    }

    type Query {
        users: [User]
    }
    type Mutation {
        register(input: UserInput): Boolean
    }
`;

export default typeDefs;
