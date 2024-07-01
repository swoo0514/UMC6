export const insertUserMissionSql =
  'INSERT INTO user_mission (user_id, mission_id, status) VALUES (?, ?, ?);';

export const getUserMissionID =
  'SELECT * FROM user_mission WHERE user_mission_id = ?';

export const confirmUserMission =
  'SELECT EXISTS(SELECT 1 FROM user_mission WHERE mission_id = ? and user_id = ?) as isAlreadyOngoing';
