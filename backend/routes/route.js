import express from 'express';
import { home } from '../controllers/home.js';
import { createPost } from '../controllers/createPost.js';

const router = express.Router();

router.get('/', home);
router.post('/', createPost);

export default router;
