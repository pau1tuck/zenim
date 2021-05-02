import "reflect-metadata";
import "dotenv/config";
import { v4 } from "uuid";
import cors from "cors";

import express, { Express, Request, Response } from "express";
import session from "express-session";

import { ApolloServer, gql } from "apollo-server-express";

import models from "./config/database";
import { UserModel } from "./models/user.model";
import { RedisStore, redisClient } from "./config/redis";

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
    # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

    # This "User" type defines the queryable fields for every book in our data source.
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

    # The "Query" type is special: it lists all of the available queries that
    # clients can execute, along with the return type for each. In this
    # case, the "users" query returns an array of zero or more Users (defined above).
    type Query {
        users: [User]
    }
    type Mutation {
        register(input: UserInput): Boolean
    }
`;

const resolvers = {
    Mutation: {
        register: async (
            parent: any,
            { input }: any,
            context: any,
            info: any
        ) => {
            const newUser = new models.instance.User({
                givenName: input.givenName,
                familyName: input.familyName,
                city: input.city,
                country: input.country,
                email: input.email,
                password: input.password,
                verified: true,
                roles: ["ADMIN", "MODERATOR"],
            });
            await newUser.save((err: string) => {
                if (err) {
                    console.log(err);
                    return false;
                }
                return true;
            });
        },
    },
};

const server = async () => {
    console.log(models);
    console.log(`Cassandra: ${models.instance.User === UserModel}`);
    console.log(models.instance.User);

    UserModel.syncDB(function (err: string, result: boolean) {
        if (err) throw err;
        console.log("syncDB" + result);
        return result;
    });

    const app: Express = express();

    app.set("trust proxy", 1);

    app.use(
        cors({ origin: String(process.env.CORS_ORIGIN), credentials: true })
    );

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        playground: Boolean(process.env.DEBUG),
        introspection: Boolean(process.env.DEBUG),
    });

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(process.env.PORT, () => {
        console.log(`🚀 Node server running on port ${process.env.PORT}`);
    });
};

server().catch((err) => {
    console.log(err);
});
