import jwt from "jsonwebtoken";

export const authenticate = (req, res, next) => {
    const token = req.header('authorization')?.split(' ')[1];
    try {
        const verified = jwt.verify(token, 'Hellos2222');
        req.verifiedUser = verified.user;
        next();
    } catch (error) {
        return false;
    }
}