export interface IUserInput {
    input: {
        givenName: string;
        familyName: string;
        city: string;
        country: string;
        email: string;
        password: string;
        verified: boolean;
        roles: [string];
    };
}
