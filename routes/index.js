import express from 'express';

import authRoutes from './auth';
import menuRoutes from './menu';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.status(200).json({});
});

router.use('/auth', authRoutes);
router.use('/menu', menuRoutes);

export default router;
