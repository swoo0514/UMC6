import { BaseError } from '../../config/error.mjs';
import { status } from '../../config/response.status.mjs';
import { addChallenge, getChallenge } from '../models/mission.dao.mjs';

export const joinChallenge = async (missionId, body) => {
  const joinChallengeData = await addChallenge({
    user_id: body.user_id,
    mission_id: missionId,
    status: body.status,
  });
  console.log(joinChallengeData);
  if (joinChallengeData == -1) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  } else {
    return getChallenge(joinChallengeData);
  }
};
