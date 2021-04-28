import { ExampleController } from '../setup';
import RouteManager from '../../classes/RouteManager';
import { expect } from 'chai';
import { HttpVerb } from '../../typings/enums';
import Route from '../../classes/Route';

const exampleController = new ExampleController();

describe('RouteManager', () => {
    describe('getRoutes', () => {
        it('should return route map defined for controller', () => {
            const routes = RouteManager.getRoutes(exampleController);
            expect(routes.get('get')).to.not.be.undefined;
        });
    });

    describe('addRoute', () => {
        it('should add a route to route map for controller', () => {
            const route = new Route();
                route.path = '/route-manager-test';
                route.handler = () => {};
                route.method = HttpVerb.Get;
            RouteManager.addRoute(exampleController, 'routerManagerTest', route);

            expect(RouteManager.getRoutes(exampleController).get('routerManagerTest')).to.not.be.undefined;
        });
    });
});