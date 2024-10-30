import { Router, Request, Response, NextFunction } from 'express';
import Controller from '../interface/controller';

class ControllerExample implements Controller {
    public path = '/posts';
    public router = Router();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes(): void {
        this.router.post(
            `${this.path}`,
            this.HttpHandle
        );
    }

    private HttpHandle = (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        return res.json({ message: "success" })
    };
}

export default ControllerExample;
