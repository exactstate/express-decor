import 'reflect-metadata';
import { RequestHandler, Request, Response } from 'express';
import { IRouteOptions } from "../typings";
import RouteManager from '../classes/RouteManager';
import { HttpVerb } from '../typings/enums';
import Route from '../classes/Route';

export function route(options: IRouteOptions) {
    return function(target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<any>) {
        const route: Route = new Route(); 
        route.path = options.path || propertyKey;
        route.handler = <RequestHandler>descriptor.value;
        route.method = options.method || HttpVerb.Get;

        RouteManager.addRoute(target, propertyKey, route);
    }
}

export const get = (path?: string) => route({ path, method: HttpVerb.Get });
export const post = (path?: string) => route({ path, method: HttpVerb.Post });
export const put = (path?: string) => route({ path, method: HttpVerb.Put });
export const patch = (path?: string) => route({ path, method: HttpVerb.Patch });
export const del = (path?: string) => route({ path, method: HttpVerb.Delete });