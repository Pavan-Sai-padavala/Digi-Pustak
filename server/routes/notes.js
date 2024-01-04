const express=require('express');
const router=express.Router();

const noteController=require('../controllers/notes')

router.post('/create',noteController.createNote)
router.get('/:id',noteController.getNoteById);
router.get('/',noteController.getAllNotes);
router.patch('/:id',noteController.updateNote);
router.delete('/:id',noteController.deleteNote);
// router.delete('/:id',require('../controllers/note'));

module.exports=router;