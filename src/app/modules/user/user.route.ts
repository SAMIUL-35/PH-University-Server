import express from 'express';
import { UserControllers } from './user.controller';

const router = express.Router();

// router.post('/create-student', UserControllers.createStudent);
router.post('/create-student', (req, res, next) => {
  console.log('Route handler hit: /create-student');
  next();
}, UserControllers.createStudent);

export const UserRoutes = router;