import 'reflect-metadata';
import { IRoute } from '../typings';

export default class RouteManager {
    static metadataKey: Symbol = Symbol('routes');

    static getRoutes(target: any): Map<string, IRoute> {
        return Reflect.getMetadata(RouteManager.metadataKey, target) || new Map<string, IRoute>();
    }

    static addRoute(target: any, route: IRoute): void {
        const routes = RouteManager.getRoutes(target);
        routes.set(route.path, route);
        Reflect.defineMetadata(RouteManager.metadataKey, routes, target);
    }
}