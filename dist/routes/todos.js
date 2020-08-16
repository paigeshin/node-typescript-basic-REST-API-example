"use strict";
//Learning - Note that all syntax is possible.
Object.defineProperty(exports, "__esModule", { value: true });
// const express = require('express');
const express_1 = require("express");
//Learning - if you set `const`, you can only modify array.
//Learning - but if you set `let`, you can override entire array.
let todos = [];
// const router = express.Router()
const router = express_1.Router();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    //Learning, Cast it to a certain type for getting warning sign.
    //Learning, Remember that we use typescript to avoid mistakes.
    const body = req.body;
    const newTodo = {
        id: new Date().toISOString(),
        text: body.text
    };
    todos.push(newTodo);
    res.status(201).json({ message: 'Added Todo', todo: newTodo, todos: todos });
});
router.put('/todo:todoId', (req, res, next) => {
    const params = req.params; //string
    const body = req.body;
    //index는 모두 string type이다.
    const todoIndex = todos.findIndex((todoItem) => todoItem.id === params.todoId);
    //0보다 크면 element가 있다는 뜻이다.
    if (todoIndex > 0) {
        todos[todoIndex] = {
            id: todos[todoIndex].id,
            text: body.text
        };
        return res.status(200).json({ message: 'Updated todo', todos });
    }
    res.status(404).json({ message: 'Could not find todo for this id.' });
});
router.delete('/todo/:todoId', (req, res, next) => {
    const params = req.params;
    todos = todos.filter((todoItem) => todoItem.id !== params.todoId);
    res.status(200).json({ message: 'Deleted todo', todos: todos });
});
//module.exports = router;
exports.default = router;
