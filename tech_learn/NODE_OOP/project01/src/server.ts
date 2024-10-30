import 'dotenv/config';
import App from './app';
import ControllerExample from './controller/controllerExample';


const app = new App(
    [new ControllerExample()],
    Number(process.env.PORT)
);

app.listen();
