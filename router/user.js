const ex = require('express');
const routes = ex.Router();
const user = require('../controller/user');

routes.get('/user', user.getUser)

routes.get('/user/:id', user.getUserById);

routes.post('/user', user.createUser);

routes.put('/user/:id', user.updateUser);

routes.delete('/user/:id', user.deleteUser);

module.exports = routes;
