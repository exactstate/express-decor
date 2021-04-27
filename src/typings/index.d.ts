import { HttpVerb } from './enums';
import { RequestHandler } from 'express';

export interface IRoute {
	path: string,
	method: HttpVerb,
	handler: RequestHandler
}

export interface IRouteOptions {
	method: HttpVerb,
	path: string
}