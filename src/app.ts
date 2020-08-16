//Learning - In typescript you can use esmodule syntax. The only difference is that you don't acutally need to add `extension`
import express from 'express';
//const express = require('express');

import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';
//const todosRoutes = require('./routes/todos);

const app = express();

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(3000);
//app.listen({3000});
