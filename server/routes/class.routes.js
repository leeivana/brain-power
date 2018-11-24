import { Router } from 'express';
import * as ClassController from '../controllers/class.controller';

const router = new Router();

//Getes all classes in db
router.route('/').get(ClassController.getClasses);

//Gets individual class based on _id
router.route('/:_id').get(ClassController.getClass);

//Gets all students in a specific class
router.route('/:_id/students').get(ClassController.getStudentsInClass);

export default router;
