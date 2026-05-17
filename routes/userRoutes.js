// routes/userRoutes.js

import express from 'express';
import { getAllUsers, updateProfile,getProfile,deleteUserById } from '../controllers/userController.js';
import { verifyToken } from '../middleware/auth.js';
import { authorize } from '../middleware/authorize.js';
import { PERMISSIONS } from '../config/index.js';

const router = express.Router();

// Get Current User Profile
router.get('/me', 
  verifyToken, 
  authorize([PERMISSIONS.USER.READ_OWN]), 
  getProfile
);

// Update Current User Profile
router.put('/me', 
  verifyToken, 
  authorize([PERMISSIONS.USER.UPDATE_OWN]), 
  updateProfile
);

// Get All Users (Admin Only)
router.get('/', 
  verifyToken, 
  authorize([PERMISSIONS.USER.READ_ALL]), 
  getAllUsers
);

// Delete User (Admin Only)
router.delete('/:id', 
  verifyToken, 
  authorize([PERMISSIONS.USER.DELETE_ANY]), 
  deleteUserById
);
export default router;