import { Router, Request, Response } from "express";
import { IMiddlewares } from "../typings";
import MiddlewareManager from "./MiddlewareManager";
import Route from "./Route";
import RouteManager from "./RouteManager";

export default class Controller {
    private _path: string;
    private _router: Router = Router();
    private _routes: Map<string, Route> = new Map<string, Route>();
    protected _middlewares: IMiddlewares = { before: [], after: [] };

    constructor(path: string = '/') {
        this._path = path;
        this.setupRoutes();
    }

    private setupRoutes(): void {
        this._routes = RouteManager.getRoutes(this);
        this._routes.forEach((route: Route, key: string) => {
            route.middlewares = MiddlewareManager.getMiddlewares(this, key);
            route.registerRoute(this._router);
        });
    }

    public get router(): Router {
        return this._router;
    }

    public get path(): string {
        return this._path;
    }

    public get routes(): Map<string, Route> {
        return this._routes;
    }

    public get middlewares(): IMiddlewares {
        return this._middlewares;
    }
}