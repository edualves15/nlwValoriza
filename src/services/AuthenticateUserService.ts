import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {
    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories)

        // Verificar se e-mail existe
        const user = await usersRepositories.findOne({
            email
        })
        if (!user) {
            throw new Error("Incorrect e-mail or password!");
        }

        // Verificar se senha está correta
        const passwordMatch = await compare(password, user.password);
        if (!passwordMatch) {
            throw new Error("Incorrect e-mail or password!");
        }

        // Gerar token
        const token = sign(
            { email: user.email },
            "5b445f9711b036c48dc8b7a3d33eb700",
            { subject: user.id, expiresIn: "1d" }
        );

        return token;
    }
}

export { AuthenticateUserService };