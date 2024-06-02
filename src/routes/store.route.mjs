import express from 'express';
import asyncHandler from 'express-async-handler';
import { addMission } from '../controllers/store.controller.mjs';

export const storeRouter = express.Router();

storeRouter.post('/:storeId/missions', asyncHandler(addMission));
