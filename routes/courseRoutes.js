// routes/courseRoutes.js

import express from 'express';
import { createCourse, updateCourse, deleteCourse, getCourses } from '../controllers/courseController.js';
import { verifyToken } from '../middleware/auth.js';
import { authorize } from '../middleware/authorize.js';
import { PERMISSIONS } from '../config/index.js';

const router = express.Router();

router.route('/')
    .get(
      verifyToken, 
      authorize([PERMISSIONS.COURSE.READ_ALL]), 
      getCourses
    )
    .post(
      verifyToken, 
      authorize([PERMISSIONS.COURSE.CREATE_ANY]), 
      createCourse
    );

router.route('/:id')
    .put(
      verifyToken, 
      authorize([PERMISSIONS.COURSE.UPDATE_ANY]), 
      updateCourse
    )
    .delete(
      verifyToken, 
      authorize([PERMISSIONS.COURSE.DELETE_ANY]), 
      deleteCourse
    );

export default router;