// routes/enrollmentRoutes.js

import express from 'express';
import { getAllEnrollments,getMyEnrollments, getEnrollmentById, updateGrade,enrollStudent,deleteEnrollment} from '../controllers/enrollmentController.js';
import { verifyToken } from '../middleware/auth.js';
import { authorize } from '../middleware/authorize.js';
import { PERMISSIONS } from '../config/index.js';

const router = express.Router();

router.get('/', 
  verifyToken, 
  authorize([PERMISSIONS.ENROLLMENT.READ_ALL]), 
  getAllEnrollments
);

router.post('/enroll', 
  verifyToken, 
  authorize([PERMISSIONS.ENROLLMENT.CREATE_OWN]), 
  enrollStudent
);

router.get('/me', 
  verifyToken, 
  authorize([PERMISSIONS.ENROLLMENT.READ_OWN]), 
  getMyEnrollments
);

router.route('/:id')
    .get(
      verifyToken, 
      authorize([PERMISSIONS.ENROLLMENT.READ_OWN, 
        PERMISSIONS.ENROLLMENT.READ_ALL]), 
      getEnrollmentById
    )
    .put(
      verifyToken, 
      authorize([PERMISSIONS.ENROLLMENT.UPDATE_ANY]), 
      updateGrade
    )
    .delete(
      verifyToken, 
      authorize([PERMISSIONS.ENROLLMENT.DELETE_ANY]), 
      deleteEnrollment
    );

export default router;

