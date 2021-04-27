import express, { Request, Response } from 'express';
import { controller, Controller, get, before } from '..';
const app = express();

@controller('/example')
export class ExampleController extends Controller {
    @get('/index')
    @before((req: any, res: any) => { console.log('works'); })
    get(req: Request, res: Response) {
        res.sendStatus(200);
    }
}

export const exampleController = new ExampleController();
export default app;