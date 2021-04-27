import { MiddlewareOrder } from './../typings/enums';
import { RequestHandler } from 'express';
import MiddlewareManager from '../classes/MiddlewareManager';
import { IMiddlewareOptions } from './../typings/index.d';

export function middleware(options: IMiddlewareOptions) {
    return function(target: any, propertyKey?: string) {
        MiddlewareManager.addMiddleware(target, propertyKey || target.name, options);
    }
}

export const before = (handler: RequestHandler) => middleware({ type: MiddlewareOrder.Before, handler });
export const after = (handler: RequestHandler) => middleware({ type: MiddlewareOrder.After, handler });