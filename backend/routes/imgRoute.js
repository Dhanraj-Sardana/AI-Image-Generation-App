import express from 'express';
import { image } from '../controllers/image.js';

const imgRouter = express.Router();

imgRouter.post('/', image);

export default imgRouter;
