import { response } from '../../config/response.mjs';
import { status } from '../../config/response.status.mjs';

import { joinUser } from '../services/user.service.mjs';

export const userSignin = async (req, res, next) => {
  console.log('회원가입을 요청하였습니다.');
  console.log('body:', req.body);
  res.send(response(status.SUCCESS), await joinUser(req.body));
};
