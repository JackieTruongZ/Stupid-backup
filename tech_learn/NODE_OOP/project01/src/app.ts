import express, { Application } from 'express';
import mongoose from 'mongoose';
import Controller from './interface/controller';
import ErrorMiddleware from './middleware/error';


class App {
    public expess: Application;
    public port: number;

    constructor(controllers: Controller[], port: number) {
        this.expess = express();
        this.port = port;
        // THE ORDER OF THESE FUNCTIONS IS IMPORTANT 
        this.initializeDatabaseConnection();
        this.initializeMiddleware();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    private initializeDatabaseConnection(): void {
        const { MONGO_USERNAME, MONGO_PASSWORD, MONGO_PATH } = process.env;
        mongoose.connect(`mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}${MONGO_PATH}`);
    }

    private initializeMiddleware(): void {
        this.expess.use(express.json());
        this.expess.use(express.urlencoded({ extended: true }));
    }

    private initializeControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.expess.use('/api', controller.router);
        })
    }

    private initializeErrorHandling(): void {
        this.expess.use(ErrorMiddleware);
    }

    public listen(): void {
        this.expess.listen(this.port, () => {
            console.log(`App listening on port ${this.port}`);
        })
    }

}

export default App;
