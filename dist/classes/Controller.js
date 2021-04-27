"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const RouteManager_1 = __importDefault(require("./RouteManager"));
class Controller {
    constructor(path) {
        this._router = express_1.Router();
        this._routes = new Map();
        this._path = path;
        this.setupRoutes();
    }
    setupRoutes() {
        this._routes = RouteManager_1.default.getRoutes(this);
        this._routes.forEach(route => {
            this._router[route.method](route.path, route.handler);
        });
    }
}
exports.default = Controller;
