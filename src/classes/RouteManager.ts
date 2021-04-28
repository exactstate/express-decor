import 'reflect-metadata';
import { IRoute } from '../typings';
import Route from './Route';

export default class RouteManager {
    static metadataKey: Symbol = Symbol('express-decor:routes');

    static getRoutes(target: any): Map<string, Route> {
        return Reflect.getMetadata(RouteManager.metadataKey, target) || new Map<string, Route>();
    }

    static getRoute(target: any, propertyKey: string): Route {
        return RouteManager.getRoutes(target).get(propertyKey) || new Route();
    }

    static addRoute(target: any, propertyKey: string, route: Route): void {
        const routes = RouteManager.getRoutes(target);
        routes.set(propertyKey, route);
        Reflect.defineMetadata(RouteManager.metadataKey, routes, target);
    }
}