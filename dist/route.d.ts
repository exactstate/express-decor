import 'reflect-metadata';
import { IRouteOptions } from "./typings";
export declare function route(options: IRouteOptions): (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => void;
export declare const get: (path: string) => (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => void;
export declare const post: (path: string) => (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => void;
export declare const put: (path: string) => (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => void;
export declare const patch: (path: string) => (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => void;
export declare const del: (path: string) => (target: any, propertyKey: string, descriptor: TypedPropertyDescriptor<Function>) => void;
