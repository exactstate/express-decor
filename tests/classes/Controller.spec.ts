import { expect } from "chai"
import { exampleController } from '../setup';

describe('Controller', () => {
    it('should instantiate and expose an Express router', () => {
        expect(
            exampleController.router && 
            typeof(exampleController.router.get) === 'function'
        ).true
    })

    it('should set and expose Controller path', () => {
        expect(exampleController.path).equals('/example');
    })

    describe('setupRoutes', () => {
        it('should register defined routes on Express router', () => {
            expect(exampleController.router.stack[0].route.path).equals('/index');
            expect(exampleController.routes.size).equals(exampleController.router.stack.length);
        });
    })

});