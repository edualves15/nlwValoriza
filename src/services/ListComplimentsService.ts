import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepositories";

class ListComplimentsService {
    async execute() {
        const complimentsRepositories = getCustomRepository(
            ComplimentsRepository
        );

        const compliments = await complimentsRepositories.find();

        return compliments;
    }
}

export { ListComplimentsService };