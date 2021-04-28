import { HttpVerb, MiddlewareOrder } from './enums';
import { RequestHandler } from 'express';

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