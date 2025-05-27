const express = require('express')
const router = express.Router()
const Task = require('../models/Task.js')
const TaskController = require('../controllers/TaskControllers.js')

router.post("/create", TaskController.create)
router.get('/', TaskController.getAll )
router.get('/id/:id', TaskController.getByID)
router.put("/markascompleted/:id", TaskController.updateCompleted)
router.put('/id/:id', TaskController.updateByName) 
router.delete('/id/:id', TaskController.deleteTask )

module.exports = router