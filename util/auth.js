import jwt from "jsonwebtoken";

export const createJWT = user => {
    return jwt.sign({ user }, 'Hellos2222', {
        expiresIn: '1h'
    });
}