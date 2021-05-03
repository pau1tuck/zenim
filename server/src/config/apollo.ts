import { ApolloServer } from "apollo-server-express";
import typeDefs from "../graphql/typedefs";
import resolvers from "../resolvers";

const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    playground: Boolean(process.env.DEBUG),
    introspection: Boolean(process.env.DEBUG),
});

export default apolloServer;
