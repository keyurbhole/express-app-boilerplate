import express from 'express';
const router = express.Router();

// Routers
import usersRouter from'./users';

/**
 * API endpoints
 */
router.use('/users', usersRouter);

export default router;