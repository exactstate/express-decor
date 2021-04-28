import { RequestHandler, Router, Request, Response } from "express";
import { IMiddlewares } from "../typings";
import { HttpVerb } from "../typings/enums";

export default class Route {
    path: string = '';
    method: HttpVerb = HttpVerb.Get;
    handler?: RequestHandler;
    middlewares: IMiddlewares = {
        before: [],
        after: []
    };
    parameters: any[] = [];

    public registerRoute(router: Router) {
        if (!this.handler) 
            throw new Error(`Route ${this.path} not properly implemented.`);

        router[this.method](
            this.path,
            ...this.middlewares.before,
            (req: Request, res: Response, next: any) => {
                try {
                    return this.handler?.apply(this, [req, res, next]);
                } catch (err) {
                    next(err);
                }
            },
            ...this.middlewares.after
        );
    }
}