import { Controller } from '..';
import { Router } from 'express';

export function registerControllers(router: Router, controllers: Controller[] | Controller) {
    controllers = Array.isArray(controllers) ? controllers : [controllers];

    controllers.forEach(controller => {
        router.use(controller.path, controller.router);
    })
}