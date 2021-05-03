import prisma from "../../config/prisma";

const users = async () => {
    const allUsers = await prisma.user.findMany();
    return allUsers;
};

export default users;
