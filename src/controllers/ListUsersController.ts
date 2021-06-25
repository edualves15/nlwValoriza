import { Request, Response } from "express";
import { ListUsersService } from "../services/ListUsersService";


class ListUsersController {
    async handle(request: Request, response: Response) {
        const ListUsersService = new ListUsersService();

        const users = await ListUsersService.execute();

        return response.json(users);
    };
}

export { ListUsersController };