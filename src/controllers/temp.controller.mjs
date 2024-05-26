import { status } from '../../config/response.status.mjs';
import { getTempData, checkFlag } from '../services/temp.service.mjs';
import { response } from '../../config/response.mjs';

export const tempTest = (req, res, next) => {
  res.send(response(status.SUCCESS, getTempData()));
};

export const tempException = (req, res, next) => {
  console.log('/temp/exception/' + req.params.flag);
  return res.send(response(status.SUCCESS, checkFlag(req.params.flag)));
};
