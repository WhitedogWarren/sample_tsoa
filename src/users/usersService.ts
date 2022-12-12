import { User } from "./user.interface";

export type UserCreationParams = Pick<User, "email" | "name" | "password">;

export class UserService {
    public get(id: string, name?: string): User {
        return {
            id,
            email: "lwerquin@irium-software.com",
            password: "secret",
            name: "Whitedog"
        };
    }

    public create(userCreationParams: UserCreationParams): User {
        return {
            id: Math.floor(Math.random() * 10000).toString(),
            ...userCreationParams

        };
    }
}