const express = require('express');
const bodyparser = require('body-parser');
const mongo = require('./database/server');
const routerUser = require('./router/user');
const app = express();
const port = 3000;

//List Route
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

// Read Dari Request
app.use(routerUser);

// Main Web ROute
app.get('/', (req, res) => res.send('Hello World!'));

//db conection
// mongo.connect(
//     mongo.db.on('error', console.error.bind(console, 'connection error:')),
//     mongo.db.once('open', function () {
//         // we're connected!
//         console.log('Database Connected');
//     })
// );

// listen web
app.listen(port, () => console.log(`Example app listening on port ${port}!`));