export const insertMissionSql =
  'INSERT INTO mission (store_id, reward, deadline, mission_spec) VALUES (?, ?, ?, ?);';

export const getMissionID = 'SELECT * FROM mission WHERE mission_id = ?';

export const confirmStore =
  'SELECT EXISTS(SELECT 1 FROM store WHERE store_id = ?) as isExistStore';
