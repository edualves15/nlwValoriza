import { response } from "express";
import { getCustomRepository } from "typeorm";
import { ComplimentsRepository } from "../repositories/ComplimentsRepositories";

class ListUsersReceiveRankingService {
    async execute() {
        const complimentsRepositories = getCustomRepository(
            ComplimentsRepository
        );

        let results = await complimentsRepositories
            .createQueryBuilder('complimentsRepositories')
            .select("user_receiver AS user_id")
            .addSelect("COUNT(*) AS compliments")
            .groupBy("user_id")
            .orderBy("compliments", "DESC")
            .getRawMany();

        console.log(results);
        return results;
    }
}

export { ListUsersReceiveRankingService };