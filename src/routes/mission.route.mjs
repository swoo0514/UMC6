import express from 'express';
import asyncHandler from 'express-async-handler';
import { createChallenge } from '../controllers/mission.controller.mjs';

export const missionRouter = express.Router();

missionRouter.post('/challenge/:missionId', asyncHandler(createChallenge));
