import { Router } from 'express';
import * as StudentController from '../controllers/student.controller';

const router = new Router();

//Gets all students
router.route('/').get(StudentController.getStudents);


export default router;
