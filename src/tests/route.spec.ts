import { Controller, route } from '..';
import { del, get, patch, post, put } from '../route';
import { expect } from 'chai';

class ExampleController extends Controller {
    @get('/get')
    get() { }
    
    @post('/post')
    post() { }

    @put('/put')
    put() { }

    @patch('/patch')
    patch() { }

    @del('/del')
    del() { }
}

const exampleController = new ExampleController();

describe('@route', () => {
    it('should append a Route object to controllers defined routes map', () => {
        const routes = exampleController.routes;

        expect(routes.get('/get')).to.not.be.null;
        expect(routes.get('/post')).to.not.be.null;
        expect(routes.get('/put')).to.not.be.null;
        expect(routes.get('/patch')).to.not.be.null;
        expect(routes.get('/del')).to.not.be.null;
    })
});