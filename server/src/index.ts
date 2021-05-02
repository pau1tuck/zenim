import "reflect-metadata";
import "dotenv/config";
import { v4 } from "uuid";
import cors from "cors";

import express, { Express, Request, Response } from "express";
import session from "express-session";

import {
    ApolloServer,
    buildSchemaFromTypeDefinitions,
} from "apollo-server-express";

import models from "./config/database";
import { RedisStore, redisClient } from "./config/redis";

const server = async () => {
    console.log(models);

    const app: Express = express();

    app.set("trust proxy", 1);

    app.listen(process.env.PORT, () => {
        console.log(`🚀 Node server running on port ${process.env.PORT}`);
    });
};

server().catch((err) => {
    console.log(err);
});
