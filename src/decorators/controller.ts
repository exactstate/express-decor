export default function controller(path: string = '/') {
    return function<T extends { new (...args: any[]): {} }>(constructor: T) {
        return class extends constructor {
            _path: string = path
        }
    }
}