import { Router } from "express";
import { IRoute } from "../typings";
import RouteManager from "./RouteManager";

export default class Controller {
    private _path: string;
    private _router: Router = Router();
    private _routes: Map<string, IRoute> = new Map<string, IRoute>();

    constructor(path: string = '/') {
        this._path = path;
        this.setupRoutes();
    }

    private setupRoutes(): void {
        this._routes = RouteManager.getRoutes(this);
        this._routes.forEach(route => {
            this._router[route.method](
                route.path,
                route.handler
            );
        });
    }

    public get router(): Router {
        return this._router;
    }

    public get path(): string {
        return this._path;
    }

    public get routes(): Map<string, IRoute> {
        return this._routes;
    }
}