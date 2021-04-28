import RouteManager from "../classes/RouteManager"

export function body(field: string) {
    return function(target: any, propertyKey: string, parameterIndex: number) {
        const route = RouteManager.getRoute(target, propertyKey);

        route.parameters[parameterIndex] = field;
    }
}