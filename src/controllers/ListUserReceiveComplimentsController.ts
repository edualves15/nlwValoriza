import { Request, Response } from "express";
import { ListUsersReceiveComplimentsService } from "../services/ListUsersReceiveComplimentsService";


class ListUsersReceiveComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const ListUsersReceiveComplimentsService = new ListUsersReceiveComplimentsService();

        const compliments = await ListUsersReceiveComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}


export { ListUsersReceiveComplimentsController };