import { expect } from 'chai';
import { Controller, before, after } from '../../src';
import { get } from '../../src/decorators/route';

class ExampleController extends Controller {
    @before(() => {})
    @get()
    get() { }

    @after(() => {})
    @get()
    post() { }
}

const exampleController = new ExampleController();

describe('@middleware', () => {
    it('should append middleware handler to target defined middlewares object', () => {
        const routes = exampleController.routes;

        expect(routes.get('get')?.middlewares?.before.length).equals(1);
        expect(routes.get('post')?.middlewares?.after.length).equals(1);
    })
})