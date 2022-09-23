import userController from '../controller/userController';
import { Router } from 'express';

const router = Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/profile', userController.profile);
router.get('/', userController.getall);

export default router;