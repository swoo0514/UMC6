import express from 'express';
import asyncHandler from 'express-async-handler';
import { createReview } from '../controllers/mypage.controller.mjs';

export const mypageRouter = express.Router();

mypageRouter.post('/review/:id', asyncHandler(createReview));
