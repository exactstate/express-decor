import { NextFunction, Response, Request } from 'express';
import { BindSource } from './../typings/enums';

export default class Bind {
    private _identifier?: string;
    private _source: BindSource;
    private _parameterIndex: number;

    constructor(source: BindSource, parameterIndex: number, identifier?: string) {
        this._identifier = identifier;
        this._source = source;
        this._parameterIndex = parameterIndex;
    }

    public get parameterIndex(): number {
        return this._parameterIndex;
    }

    public get source(): BindSource {
        return this._source;
    }

    resolve(req: Request, res: Response, next: NextFunction): Request | Response | NextFunction | any {
        let value: any;

        switch(this._source) {
            case BindSource.Request: value = req; break;
            case BindSource.Response: value = res; break;
            case BindSource.Next: value = next; break;
            default:
                const source = req[this._source];
                if (!source) throw new Error(`Source '${this._source}' does not exist on Request object.`);

                value = this._identifier ? req[this._source][this._identifier] : null;
        }

        return value;
    }
}