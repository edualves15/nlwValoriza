import { Request, Response } from "express";
import { ListComplimentsService } from "../services/ListComplimentsService";

class ListComplimentsController {
    async handle(request: Request, response: Response) {
        // const { user_id } = request;

        const listComplimentsService = new ListComplimentsService();

        const compliments = await listComplimentsService.execute();

        return response.json(compliments);
    }
}

export { ListComplimentsController };