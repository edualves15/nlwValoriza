import { Request, Response } from "express";
import { ListUsersSendComplimentsService } from "../services/ListUsersSendComplimentsService";


class ListUsersendComplimentsController {
    async handle(request: Request, response: Response) {
        const { user_id } = request;

        const ListUsersSendComplimentsService = new ListUsersSendComplimentsService();

        const compliments = await ListUsersSendComplimentsService.execute(user_id);

        return response.json(compliments);
    }
}


export { ListUsersendComplimentsController };