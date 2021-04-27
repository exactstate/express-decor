"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.controller = exports.del = exports.patch = exports.put = exports.post = exports.get = exports.route = exports.Controller = void 0;
var Controller_1 = require("./classes/Controller");
Object.defineProperty(exports, "Controller", { enumerable: true, get: function () { return __importDefault(Controller_1).default; } });
var route_1 = require("./route");
Object.defineProperty(exports, "route", { enumerable: true, get: function () { return route_1.route; } });
Object.defineProperty(exports, "get", { enumerable: true, get: function () { return route_1.get; } });
Object.defineProperty(exports, "post", { enumerable: true, get: function () { return route_1.post; } });
Object.defineProperty(exports, "put", { enumerable: true, get: function () { return route_1.put; } });
Object.defineProperty(exports, "patch", { enumerable: true, get: function () { return route_1.patch; } });
Object.defineProperty(exports, "del", { enumerable: true, get: function () { return route_1.del; } });
var controller_1 = require("./controller");
Object.defineProperty(exports, "controller", { enumerable: true, get: function () { return __importDefault(controller_1).default; } });
