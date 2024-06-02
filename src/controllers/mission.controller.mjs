import { response } from '../../config/response.mjs';
import { status } from '../../config/response.status.mjs';

import { joinChallenge } from '../services/mission.service.mjs';

export const createChallenge = async (req, res, next) => {
  console.log('미션 도전 요청하였습니다.');
  console.log('body:', req.body, req.params.missionId);
  const missionId = req.params.missionId;
  const result = await joinChallenge(missionId, req.body); // joinUser 함수의 결과를 변수에 저장
  const responseBody = response(status.SUCCESS, result);
  res.status(status.SUCCESS.status).send(responseBody); // 올바른 상태 코드와 함께 응답 전송
};
