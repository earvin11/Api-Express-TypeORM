import { Router } from 'express';

import * as userController from '../controllers/user.controller';


const router = Router();

// CRUD USERS
router.post('/users', userController.sotreUser);
router.get('/users', userController.allUsers);
router.get('/users/:email', userController.userByEmail);
router.delete('/users/:email', userController.deleteUserByEmail);

//LOGIN
router.post('/auth/login', userController.login);

export default router;