"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _task = require("../controllers/task");
var router = (0, _express.Router)();

/**
* @swagger
* tags:
*  name: Tasks
*  description: Tasks endpoint
*/

/**
* @swagger
* /tasks:
*  get:
*    summary: Get all tasks
*    tags: [Tasks]
*/
router.get('/tasks', _task.getTasks);

/**
* @swagger
*  /tasks/count:
*  get:
*    summary: Get total tasks counter
*    tags: [Tasks]
*/
router.get('/tasks/count', _task.getTaskCount);

/**
* @swagger
*  /tasks:
*  get:
*    summary: update a task by id
*    tags: [Tasks]
*/
router.get('/tasks/:id', _task.getTask);

/**
* @swagger
*  /tasks:
*  post:
*    summary: save a new task
*    tags: [Tasks]
*/
router.post('/tasks', _task.saveTask);

/**
* @swagger
*  /tasks:
*  delete:
*    summary: delete a task
*    tags: [Tasks]
*/
router["delete"]('/tasks/:id', _task.deleteTask);

/**
* @swagger
*  /tasks:
*  put:
*    summary: update a task
*    tags: [Tasks]
*/
router.put('/tasks/:id', _task.updateTask);
var _default = router;
exports["default"] = _default;