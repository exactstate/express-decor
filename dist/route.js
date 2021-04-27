"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.del = exports.patch = exports.put = exports.post = exports.get = exports.route = void 0;
require("reflect-metadata");
const RouteManager_1 = __importDefault(require("./classes/RouteManager"));
const enums_1 = require("./typings/enums");
function route(options) {
    return function (target, propertyKey, descriptor) {
        const route = {
            path: options.path || '/',
            handler: descriptor.value,
            method: options.method || enums_1.HttpVerb.Get
        };
        RouteManager_1.default.addRoute(target, route);
    };
}
exports.route = route;
const get = (path) => route({ path, method: enums_1.HttpVerb.Get });
exports.get = get;
const post = (path) => route({ path, method: enums_1.HttpVerb.Post });
exports.post = post;
const put = (path) => route({ path, method: enums_1.HttpVerb.Put });
exports.put = put;
const patch = (path) => route({ path, method: enums_1.HttpVerb.Patch });
exports.patch = patch;
const del = (path) => route({ path, method: enums_1.HttpVerb.Delete });
exports.del = del;
