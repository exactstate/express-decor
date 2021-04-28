import { HttpVerb, MiddlewareOrder } from './enums';
import { RequestHandler } from 'express';

export interface IRoute {
	path?: string,
	method?: HttpVerb,
	handler?: RequestHandler,
	middlewares?: IMiddlewares,
	parameters?: any[]
}

export interface IRouteOptions {
	method: HttpVerb,
	path?: string
}

export interface IMiddlewareOptions {
	handler: RequestHandler,
	type: MiddlewareOrder
}

export interface IMiddlewares {
	before: RequestHandler[],
	after: RequestHandler[]
}