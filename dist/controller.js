"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function controller(path = '/') {
    return function (constructor) {
        return class extends constructor {
            constructor() {
                super(...arguments);
                this._path = path;
            }
        };
    };
}
exports.default = controller;
