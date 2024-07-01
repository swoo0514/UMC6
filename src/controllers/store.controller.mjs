import { response } from '../../config/response.mjs';
import { status } from '../../config/response.status.mjs';

import { joinMission } from '../services/store.service.mjs';
import { getReview } from '../providers/store.provider.mjs';

export const addMission = async (req, res, next) => {
  console.log('미션 추가를 요청하였습니다.');
  console.log('body:', req.body, req.params.storeId);
  const storeId = req.params.storeId;
  const result = await joinMission(storeId, req.body); // joinUser 함수의 결과를 변수에 저장
  const responseBody = response(status.SUCCESS, result);
  res.status(status.SUCCESS.status).send(responseBody); // 올바른 상태 코드와 함께 응답 전송
};

export const reviewPreview = async (req, res, next) => {
  return res
    .status(status.SUCCESS.status)
    .send(await getReview(req.params.storeId, req.query));
};
