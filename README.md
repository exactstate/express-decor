# express-decor
Provides classes and decorators which enables OOP declaration of Express routers and routes.
`yarn add express-decor`

## Example
```ts
import express from 'express';
import { registerControllers, Controller, controller, get } from 'express-decor';

const app = express();

@controller('/users')
class UsersController extends Controller {
  @get('/')
  findById(req, res, next) {
    return res.json(Users.all());
  }
}

registerControllers(app, [
  new UsersController()
]);

app.listen(8080);
```
