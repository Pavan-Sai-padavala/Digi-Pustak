const express=require('express');
const taskController=require('../controllers/tasks');

const router=express.Router();

router.post('/create',taskController.createTask);
router.get('/:id',taskController.getTaskById);
router.get('/',taskController.getAllTasks);
router.patch('/:id',taskController.updateTask);
router.delete('/:id',taskController.deleteTask);

module.exports=router;