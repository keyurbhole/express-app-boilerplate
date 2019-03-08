import express from 'express';
const router = express.Router();

import { signUp, login, updateUser } from '../controllers/users.controller';

import { middleware } from '../middlewares/auth.middelware';

// without auth middleware
router.post('/signup', signUp);

router.post('/login', login);

router.use(middleware);

/**
 * Add all API endpoints after `router.use(authMiddleware);` for using auth API's
 */
router.put('/', updateUser);

export default router;
