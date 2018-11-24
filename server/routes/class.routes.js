import { Router } from 'express';
import * as ClassController from '../controllers/class.controller';

const router = new Router();

router.route('/').get(ClassController.getClasses);

export default router;
