import express from 'express';

import userControllers from '../controllers/user.js';

const router = express.Router();
router.post('/register', userControllers.register);
router.post('/login', userControllers.logIn);
router.get('/logout', userControllers.logout);

export default router;
