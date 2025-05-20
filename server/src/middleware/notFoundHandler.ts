import { Request, Response, NextFunction } from 'express';
import { AppError } from './errorHandler';

export const notFoundHandler = (
    req: Request,
    _res: Response,
    next: NextFunction
) => {
    next(new AppError(404, `Route ${req.originalUrl} not found`));
}; 