import 'reflect-metadata';
import { IRoute } from '../typings';
export default class RouteManager {
    static metadataKey: Symbol;
    static getRoutes(target: any): Map<string, IRoute>;
    static addRoute(target: any, route: IRoute): void;
}
