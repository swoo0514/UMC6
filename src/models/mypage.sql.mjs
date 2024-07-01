export const insertReviewSql =
  'INSERT INTO review (user_id, store_id, body, score) VALUES (?, ?, ?, ?);';

export const getReviewID = 'SELECT * FROM review WHERE review_id = ?';

export const confirmStore =
  'SELECT EXISTS(SELECT 1 FROM store WHERE store_id = ?) as isExistStore';
