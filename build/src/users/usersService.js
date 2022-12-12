"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
class UserService {
    get(id, name) {
        return {
            id,
            email: "lwerquin@irium-software.com",
            password: "secret",
            name: "Whitedog"
        };
    }
    create(userCreationParams) {
        return Object.assign({ id: Math.floor(Math.random() * 10000).toString() }, userCreationParams);
    }
}
exports.UserService = UserService;
