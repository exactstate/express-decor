import { RequestHandler, Router, Request, Response, NextFunction } from "express";
import { IMiddlewares } from "../typings";
import { BindSource, HttpVerb } from "../typings/enums";
import Bind from "./Bind";

export default class Route {
    path: string = '';
    method: HttpVerb = HttpVerb.Get;
    handler?: Function;
    middlewares: IMiddlewares = {
        before: [],
        after: []
    };
    binds: Bind[] = [];

    public registerRoute(router: Router) {
        if (!this.handler) 
            throw new Error(`Route ${this.path} not properly implemented.`);

        router[this.method](
            this.path,
            ...this.middlewares.before,
            (req: Request, res: Response, next: any) => {
                try {
                    const result = this.handler?.apply(this, this.resolveBinds(req, res, next));
                    if (this.binds.findIndex(bind => bind.source === BindSource.Response) < 0) {
                        return res.json(result);
                    }
                } catch (err) {
                    next(err);
                }
            },
            ...this.middlewares.after
        );
    }

    private resolveBinds(req: Request, res: Response, next: NextFunction): any[] {
        this.binds.sort((a, b) => a.parameterIndex - b.parameterIndex);
        return this.binds.length > 0 ? 
            this.binds.map(bind => bind.resolve(req, res, next)) :
            [req, res, next];
    }
}