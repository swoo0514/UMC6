import { pool } from '../../config/db.config.mjs';
import { BaseError } from '../../config/error.mjs';
import { status } from '../../config/response.status.mjs';
import {
  confirmUserMission,
  getUserMissionID,
  insertUserMissionSql,
} from './mission.sql.mjs';

export const addChallenge = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmUserMission, [
      data.mission_id,
      data.user_id,
    ]);

    if (confirm[0].isAlreadyOngoing) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertUserMissionSql, [
      data.user_id,
      data.mission_id,
      data.status,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    console.error(err);
  }
};

export const getChallenge = async (userMissionId) => {
  try {
    const conn = await pool.getConnection();
    const [review] = await pool.query(getUserMissionID, userMissionId);

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
