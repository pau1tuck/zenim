import prisma from "../../config/prisma";
import { IUserInput } from "../../types/user-input.interface";
import argon2 from "argon2";

const register = async (
    parent: void,
    { input }: IUserInput,
    context: void
): Promise<Boolean> => {
    const encryptedPassword = await argon2.hash(input.password);
    console.log(input);
    try {
        await prisma.user.create({
            data: {
                ...input,
                password: encryptedPassword,
                verified: true,
                roles: ["ADMIN", "MODERATOR"],
            },
        });
    } catch (error) {
        console.log(error);
        return false;
    }
    return true;
};

export default register;
