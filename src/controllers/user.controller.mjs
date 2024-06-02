import { response } from '../../config/response.mjs';
import { status } from '../../config/response.status.mjs';

import { joinUser } from '../services/user.service.mjs';

export const userSignin = async (req, res, next) => {
  console.log('회원가입을 요청하였습니다.');
  console.log('body:', req.body);
  const result = await joinUser(req.body); // joinUser 함수의 결과를 변수에 저장
  const responseBody = response(status.SUCCESS, result);
  res.status(status.SUCCESS.status).send(responseBody); // 올바른 상태 코드와 함께 응답 전송
  // res.status(response(status.SUCCESS)).send(await joinUser(req.body));
};
