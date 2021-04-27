"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
class RouteManager {
    static getRoutes(target) {
        return Reflect.getMetadata(RouteManager.metadataKey, target) || new Map();
    }
    static addRoute(target, route) {
        const routes = RouteManager.getRoutes(target);
        routes.set(route.path, route);
        Reflect.defineMetadata(RouteManager.metadataKey, routes, target);
    }
}
exports.default = RouteManager;
RouteManager.metadataKey = Symbol('routes');
