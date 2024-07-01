import express from 'express';
import asyncHandler from 'express-async-handler';
import { addMission, reviewPreview } from '../controllers/store.controller.mjs';

export const storeRouter = express.Router({ mergeParams: true });

storeRouter.post('/:storeId/missions', asyncHandler(addMission));

storeRouter.get('/:storeId/reviews', asyncHandler(reviewPreview));
