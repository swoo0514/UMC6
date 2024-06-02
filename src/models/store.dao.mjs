import { pool } from '../../config/db.config.mjs';
import { BaseError } from '../../config/error.mjs';
import { status } from '../../config/response.status.mjs';
import { confirmStore, getMissionID, insertMissionSql } from './store.sql.mjs';

export const addMission = async (data) => {
  try {
    const conn = await pool.getConnection();

    const [confirm] = await pool.query(confirmStore, data.store_id);

    if (!confirm[0].isExistStore) {
      conn.release();
      return -1;
    }

    const result = await pool.query(insertMissionSql, [
      data.store_id,
      data.reward,
      data.deadline,
      data.mission_spec,
    ]);

    conn.release();
    return result[0].insertId;
  } catch (err) {
    console.error(err);
  }
};

export const getMission = async (missionId) => {
  try {
    const conn = await pool.getConnection();
    const [review] = await pool.query(getMissionID, missionId);

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
