import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../MyContext";
import { verify } from 'jsonwebtoken'

export const LogAccess: MiddlewareFn<MyContext> = async ({ context: { req, res } }, next) => {
    let token = req.headers['authorization']
    if (!token) throw new Error('Unauthorized');
    try {
        const access_token = token.split(' ')[1];
        const decoded = verify(access_token, process.env.ACCESS_TOKEN_SECRET);
        //@ts-ignore
        req.user = { id: decoded.sub };
    } catch (err) {
        throw new Error('Forbidden');
    }
    return next();
};