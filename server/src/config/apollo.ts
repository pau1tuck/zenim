import { ApolloServer } from "apollo-server-express";
import typeDefs from "../graphql/typedefs";

const apolloServer = new ApolloServer({
    typeDefs,
    playground: Boolean(process.env.DEBUG),
    introspection: Boolean(process.env.DEBUG),
});

export default apolloServer;
