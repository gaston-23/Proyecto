import { Router } from 'express';
import AuthController from '../controllers/AuthController';


const router = Router();

router.post('/login', AuthController.login);
router.post('/signin', AuthController.signin);
router.get('/user', AuthController.getUser);
router.put('/user', AuthController.updateUser);


export default router;
