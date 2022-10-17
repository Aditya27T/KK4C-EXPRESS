const express = require('express');
const routerUser = require('./router/user');
const app = express();
const port = 3000;

//List Route
app.use(express.json());

// Read Dari Request
app.use(routerUser);

// Main Web ROute
app.get('/', (req, res) => res.send('Hello World!'));

// listen web
app.listen(port, () => console.log(`Example app listening on port ${port}!`));