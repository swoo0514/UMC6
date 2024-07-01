import { BaseError } from '../../config/error.mjs';
import { status } from '../../config/response.status.mjs';
import { addMission, getMission } from '../models/store.dao.mjs';

export const joinMission = async (storeId, body) => {
  const joinMissionData = await addMission({
    store_id: storeId,
    reward: body.reward,
    deadline: body.deadline,
    mission_spec: body.mission_spec,
  });
  console.log(joinMissionData);
  if (joinMissionData == -1) {
    throw new BaseError(status.PARAMETER_IS_WRONG);
  } else {
    return getMission(joinMissionData);
  }
};
