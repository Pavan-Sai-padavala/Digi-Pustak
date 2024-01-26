const express=require('express');

const router=express.Router();

router.post('/create',habbitController.createHabbit);
router.get('/:id',habbitController.getHabbitById);
router.get('/',habbitController.getAllHabbits);

router.patch('/id',habbitController.addStreak);
router.get('/:id',habbitController.getStreakCount);

router.patch('/:id',habbitController.updateHabbit);
router.delete('/:id',habbitController.deleteHabbit);

module.exports=router;