import { MiddlewareOrder } from '../../src/typings/enums';
import { expect } from "chai";
import MiddlewareManager from "../../src/classes/MiddlewareManager";
import { ExampleController } from "../setup";

const exampleController = new ExampleController();

describe('MiddlewareManager', () => {
    describe('getMiddlewares', () => {
        it('should return middleware object defined for any target', () => {
            const middlewares = MiddlewareManager.getMiddlewares(exampleController, 'get');
    
            expect(middlewares).to.not.be.null;
            expect(Array.isArray(middlewares.before)).true
            expect(Array.isArray(middlewares.after)).true
        });
    });

    describe('addMiddleware', () => {
        it('should add a middleware to middleware object for any target', () => {
            const originalLength = MiddlewareManager.getMiddlewares(exampleController, 'get').before.length;
            const options = {
                type: MiddlewareOrder.Before,
                handler: () => {}
            };

            MiddlewareManager.addMiddleware(exampleController, 'get', options);
            expect(MiddlewareManager.getMiddlewares(exampleController, 'get').before.length).equals(originalLength + 1);
        });
    });
});
