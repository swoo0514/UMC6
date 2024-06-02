import { BaseError } from '../../config/error.mjs';
import { status } from '../../config/response.status.mjs';
import { addReview, getReview } from '../models/mypage.dao.mjs';

export const joinReview = async (body) => {
  const joinReviewData = await addReview({
    user_id: body.user_id,
    store_id: body.store_id,
    body: body.body,
    score: body.score,
  });
  console.log(joinReviewData);
  if (joinReviewData == -1) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  } else {
    return getReview(joinReviewData);
  }
};
