import register from "./user/register";
import users from "./user/users";

const resolvers = {
    Query: {
        users,
    },
    Mutation: {
        register,
    },
};

export default resolvers;
