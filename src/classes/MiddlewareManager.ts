import 'reflect-metadata';
import { IMiddlewares, IMiddlewareOptions } from './../typings/index.d';

export default class MiddlewareManager {    
    static getMiddlewares(target: any, key: string): IMiddlewares {
        return Reflect.getMetadata(MiddlewareManager.getMetadataKey(key), target) || { before: [], after: [] };
    }

    static addMiddleware(target: any, key: string, middleware: IMiddlewareOptions): void {
        const middlewares = MiddlewareManager.getMiddlewares(target, key);
        middlewares[middleware.type].push(middleware.handler);
        Reflect.defineMetadata(MiddlewareManager.getMetadataKey(key), middlewares, target);
    }

    private static getMetadataKey(key: string): string {
        return 'express-decor:middlewares:' + key;
    }
}