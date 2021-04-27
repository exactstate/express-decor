import { ExampleController } from '../setup';
import RouteManager from '../../classes/RouteManager';
import { expect } from 'chai';
import { HttpVerb } from '../../typings/enums';

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
            const route = {
                path: '/route-manager-test',
                handler: () => {},
                method: HttpVerb.Get
            };
            RouteManager.addRoute(exampleController, 'routerManagerTest', route);

            expect(RouteManager.getRoutes(exampleController).get('routerManagerTest')).to.not.be.undefined;
        });
    });
});