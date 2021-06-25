import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token
    const authToken = request.headers.authorization;

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try {
        // Validar se token é válido
        const { sub } = verify(token, "5b445f9711b036c48dc8b7a3d33eb700") as IPayload;

        // Recuperar informações do usuário
        request.user_id = sub;

        return next();

    } catch (err) {
        return response.status(401).end();
    }





}