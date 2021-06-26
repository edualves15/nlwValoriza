import { Request, Response } from "express";
import { ListUsersReceiveRankingService } from "../services/ListUsersReceiveRankService";

class ListUsersReceiveRankingController {
    async handle(request: Request, response: Response) {
        const listUsersReceiveRankingService = new ListUsersReceiveRankingService();

        const ranking = await listUsersReceiveRankingService.execute();

        return response.json(ranking);
    }
}

export { ListUsersReceiveRankingController };