import { users, register } from "./user.resolvers";

const resolvers = {
    Query: {
        users,
    },
    Mutation: {
        register,
    },
};

export default resolvers;
