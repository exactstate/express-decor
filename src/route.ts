import 'reflect-metadata';
import { RequestHandler } from 'express';
import { IRoute, IRouteOptions } from "./typings";
import RouteManager from './classes/RouteManager';
import { HttpVerb } from './typings/enums';

export function route(options: IRouteOptions) {
    return function(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        const route: IRoute = {
            path: options.path || '/',
            handler: <RequestHandler>descriptor.value,
            method: options.method || HttpVerb.Get
        }

        RouteManager.addRoute(target, route);
    }
}

export const get = (path: string) => route({ path, method: HttpVerb.Get });
export const post = (path: string) => route({ path, method: HttpVerb.Post });
export const put = (path: string) => route({ path, method: HttpVerb.Put });
export const patch = (path: string) => route({ path, method: HttpVerb.Patch });
export const del = (path: string) => route({ path, method: HttpVerb.Delete });