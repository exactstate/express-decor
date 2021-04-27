import express, { Request, Response } from 'express';
import { controller, Controller, get } from '..';
const app = express();

@controller('/example')
export class ExampleController extends Controller {
    @get('/index')
    get(req: Request, res: Response) {
        res.sendStatus(200);
    }
}

export const exampleController = new ExampleController();
export default app;