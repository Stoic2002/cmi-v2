import { Request, Response, NextFunction } from 'express';

export interface ApiError extends Error {
    statusCode?: number;
    errors?: unknown[];
}

export const errorHandler = (
    err: ApiError,
    req: Request,
    res: Response,
    _next: NextFunction
) => {
    console.error('Error:', err);

    const statusCode = err.statusCode || 500;
    const message = err.message || 'Terjadi kesalahan pada server';

    res.status(statusCode).json({
        error: message,
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
        ...(err.errors && { errors: err.errors }),
    });
};

export const notFound = (req: Request, res: Response) => {
    res.status(404).json({ error: `Endpoint tidak ditemukan: ${req.originalUrl}` });
};

export const asyncHandler = (fn: Function) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};
