import Bind from "../classes/Bind";
import Route from "../classes/Route";
import RouteManager from "../classes/RouteManager"
import { BindSource } from "../typings/enums";

export function bind(source: BindSource, identifier?: string) {
    return function(target: any, propertyKey: string, parameterIndex: number) {
        const route: Route = RouteManager.getRoute(target, propertyKey);
        route.binds.push(new Bind(source, parameterIndex, identifier));
        RouteManager.addRoute(target, propertyKey, route);
    }
}

export const query = (identifier: string) => bind(BindSource.Query, identifier);
export const params = (identifier: string) => bind(BindSource.Params, identifier);
export const body = (identifier: string) => bind(BindSource.Body, identifier);
export const req = bind(BindSource.Request);
export const res = bind(BindSource.Response);
export const next = bind(BindSource.Next);