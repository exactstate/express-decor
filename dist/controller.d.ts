export default function controller(path?: string): <T extends new (...args: any[]) => {}>(constructor: T) => {
    new (...args: any[]): {
        _path: string;
    };
} & T;
