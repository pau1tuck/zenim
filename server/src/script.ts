import register from "module-alias";
import "reflect-metadata";
import "dotenv/config";
import { v4 } from "uuid";
import cors from "cors";

import database from "./config/database";
import express, { Express, Request, Response } from "express";
import session from "express-session";
import apolloServer from "./config/apollo";

import { RedisStore, redisClient } from "./config/redis";

import resolvers from "./resolvers";

const server = async () => {
    database.connect((err) => {
        if (err) {
            console.error("Error connecting to database:" + err.stack);
        } else {
            console.log("Connected to PostgreSQL database");
        }
    });

    const app: Express = express();

    app.set("trust proxy", 1);

    app.use(
        cors({ origin: String(process.env.CORS_ORIGIN), credentials: true })
    );

    apolloServer.applyMiddleware({ app, cors: false });

    app.listen(process.env.PORT, () => {
        console.log(`🚀 Node server running on port ${process.env.PORT}`);
    });
};

server().catch((err) => {
    console.log(err);
});
