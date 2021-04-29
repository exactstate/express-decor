import { Controller } from '..';
import { Router } from 'express';
import MiddlewareManager from '../classes/MiddlewareManager';

export function registerControllers(router: Router, controllers: Controller[] | Controller) {
    controllers = Array.isArray(controllers) ? controllers : [controllers];

    controllers.forEach(controller => {
        router.use(
            controller.path,
            ...controller.middlewares.before,
            controller.router,
            ...controller.middlewares.after
        );
    })
}