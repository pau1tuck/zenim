import models from "../config/database";

export const UserModel = models.loadSchema("User", {
    fields: {
        id: {
            type: "uuid",
            default: { $db_function: "uuid()" },
        },
        givenName: "varchar",
        familyName: "varchar",
        city: "varchar",
        country: "varchar",
        email: "varchar",
        password: "varchar",
        verified: { type: "boolean", default: false },
        roles: { type: "list", typeDef: "<varchar>", default: [] },
        facebookId: { type: "varchar", default: "" },
        googleId: { type: "varchar", default: "" },
        twitterId: { type: "varchar", default: "" },
    },
    key: [["id"]],
    options: {
        timestamps: {
            createdAt: "created_at", // defaults to createdAt
            updatedAt: "updated_at", // defaults to updatedAt
        },
    },
});
