import { IUserInput } from "../types/user-input.interface";
import models from "../config/prisma";

export const register = async (
    parent: any,
    { input }: IUserInput,
    ctx: any,
    info: any
): Promise<boolean> => {
    const newUser = new models.instance.User({
        givenName: input.givenName,
        familyName: input.familyName,
        city: input.city,
        country: input.country,
        email: input.email,
        password: input.password,
        verified: true,
        roles: ["ADMIN", "MODERATOR"],
    });
    const createUser = await newUser.save((err: string) => {
        if (err) {
            console.log(err);
            return false;
        }
        return true;
    });
    return createUser;
};

export const users = async () => {
    const allUsers: any = [];
    return new Promise((resolve, reject) =>
        models.instance.User.find({}, {data: "raw:}, (err: string, result: any) => {
            if (err) {
                return reject(err);
            }
            console.log(result);
            resolve(result.value);
        })
    );
};

setTimeout(function () {
    client.save(model.instance.person, param);
}, 3000);