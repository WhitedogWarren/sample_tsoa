import {
    Body,
    Controller,
    Get,
    Path,
    Post,
    Query,
    Route,
    SuccessResponse
} from "tsoa";

import { User } from "./user.interface";
import { UserService, UserCreationParams } from "./usersService";

@Route("users")
export class UsersController extends Controller {
    @Get("{userId}")
    public async getUser(
        @Path() userId: string,
        @Query() name?: string
    ): Promise<User> {
        return new UserService().get(userId, name);
    }

    @SuccessResponse("201", "Created")
    @Post()
    public async createUser(
        @Body() requestBody: UserCreationParams
    ): Promise<void> {
        this.setStatus(201);
        new UserService().create(requestBody);
        return;
    }
}

