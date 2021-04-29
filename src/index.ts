export { default as Controller } from './classes/Controller';
export { route, get, post, put, patch, del } from './decorators/route';
export { middleware, before, after } from './decorators/middleware';
export { bind, query, params, body } from './decorators/bind';
export { default as controller } from './decorators/controller';
export { registerControllers } from './utils/helpers';

export { IMiddlewares } from './typings';