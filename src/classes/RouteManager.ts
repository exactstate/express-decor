import 'reflect-metadata';
import { IRoute } from '../typings';

export default class RouteManager {
    static metadataKey: Symbol = Symbol('express-decor:routes');

    static getRoutes(target: any): Map<string, IRoute> {
        return Reflect.getMetadata(RouteManager.metadataKey, target) || new Map<string, IRoute>();
    }

    static addRoute(target: any, propertyKey: string, route: IRoute): void {
        const routes = RouteManager.getRoutes(target);
        routes.set(propertyKey, route);
        Reflect.defineMetadata(RouteManager.metadataKey, routes, target);
    }
}