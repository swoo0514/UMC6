import { pool } from '../../config/db.config.mjs';
import { BaseError } from '../../config/error.mjs';
import { status } from '../../config/response.status.mjs';
import { confirmStore, getReviewID, insertReviewSql } from './mypage.sql.mjs';

// User 데이터 삽입
export const addReview = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmStore, data.store_id);

    if (!confirm[0].isExistStore) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertReviewSql, [
      data.user_id,
      data.store_id,
      data.body,
      data.score,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    console.error(err);
  }
};

export const getReview = async (reviewId) => {
  try {
    const conn = await pool.getConnection();
    const [review] = await pool.query(getReviewID, reviewId);

    console.log(review);

    if (review.length == 0) {
      return -1;
    }

    conn.release();
    return review;
  } catch (err) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  }
};
