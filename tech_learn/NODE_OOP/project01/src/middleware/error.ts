import { Request, Response, NextFunction } from "express";

function ErrorMiddleware(error: Error, req: Request, res: Response, next: NextFunction): void {
    const status = error.status || 500;
    const message = error.message || "Something went wrong";

    res.status(status).send({
        status,
        message
    })

}
export default ErrorMiddleware;
