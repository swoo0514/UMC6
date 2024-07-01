export const insertMissionSql =
  'INSERT INTO mission (store_id, reward, deadline, mission_spec) VALUES (?, ?, ?, ?);';

export const getMissionID = 'SELECT * FROM mission WHERE mission_id = ?';

export const confirmStore =
  'SELECT EXISTS(SELECT 1 FROM store WHERE store_id = ?) as isExistStore';

export const getReviewByReviewId =
  'SELECT u.user_name, u.user_id, r.review_id, r.score, r.body, r.created_at ' +
  'FROM review r JOIN user u on r.user_id = u.user_id ' +
  'WHERE r.store_id = ? AND r.review_id < ? ' +
  'ORDER BY r.review_id DESC LIMIT ? ;';

export const getReviewByReviewIdAtFirst =
  'SELECT u.user_name, u.user_id, r.review_id, r.score, r.body, r.created_at ' +
  'FROM review r JOIN user u on r.user_id = u.user_id ' +
  'WHERE r.store_id = ? ' +
  'ORDER BY r.review_id DESC LIMIT ? ;';
