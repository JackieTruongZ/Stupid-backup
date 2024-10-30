import express from 'express';
import controller from './controller';
const router = express.Router();

router.post('/create', controller.createList);
router.get('/get/:Id', controller.findListbyId);
router.get('/get/', controller.findAllList);
router.patch('/update/:Id', controller.updateListbyId);
router.delete('/delete/:Id', controller.deleteListById);

export = router;
