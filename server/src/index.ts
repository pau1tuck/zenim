import "reflect-metadata";
import "dotenv/config";
import { v4 } from "uuid";
import cors from "cors";

import express, { Express, Request, Response } from "express";
import session from "express-session";

import { ApolloServer, ResolverFn } from "apollo-server-express";

import typeDefs from "./graphql/typedefs";
import resolvers from "./resolvers";
import { RedisStore, redisClient } from "./config/redis";

const server = async () => {
    database.on("connect", () => {
        console.log("Connected to PostgreSQL database");
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
