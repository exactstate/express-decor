export enum HttpVerb {
    Get = 'get',
    Post = 'post',
    Put = 'put',
    Patch = 'patch',
    Delete = 'delete'
}

export enum MiddlewareOrder {
    Before = 'before',
    After = 'after'
}

export enum BindSource {
    Query = 'query',
    Params = 'params',
    Body = 'body',
    Request = 'request',
    Response = 'response',
    Next = 'next'
}