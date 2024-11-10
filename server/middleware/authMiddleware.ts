import { Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { AuthRequest } from '../types/middleware';

export const authMiddleware = (req: AuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        res.sendStatus(403);
    } else {
        jwt.verify(token, process.env.JWT_SECRET || '', (err, user) => {
            if (err) res.sendStatus(403);
            req.user = user;
            next();
        });
    }
};
