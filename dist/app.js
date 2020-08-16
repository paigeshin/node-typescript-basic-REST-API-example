"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Learning - In typescript you can use esmodule syntax. The only difference is that you don't acutally need to add `extension`
const express_1 = __importDefault(require("express"));
//const express = require('express');
const body_parser_1 = __importDefault(require("body-parser"));
const todos_1 = __importDefault(require("./routes/todos"));
//const todosRoutes = require('./routes/todos);
const app = express_1.default();
app.use(body_parser_1.default.json());
app.use(todos_1.default);
app.listen(3000);
//app.listen({3000});
