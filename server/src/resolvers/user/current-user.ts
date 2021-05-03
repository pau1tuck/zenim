import prisma from "../../config/prisma";

const currentUser = (_: void, __: void, { req }: any) => {
    if (!req.session.passport.user.userId) return null;
    return prisma.user.findUnique({
        where: { id: req.session.passport.user.userId },
    });
};

export default currentUser;
