import express from 'express';
import { userSignin } from '../controllers/user.controller.mjs';

export const userRouter = express.Router();

userRouter.post('/signin', userSignin);
