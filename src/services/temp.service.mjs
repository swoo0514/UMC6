import { BaseError } from '../../config/error.mjs';
import { status } from '../../config/response.status.mjs';
import {
  tempResponseDTO,
  flagResponseDTO,
} from '../dtos/temp.response.dto.mjs';

export const getTempData = () => {
  return tempResponseDTO('This is TEST! >.0');
};

export function checkFlag(flag) {
  if (flag == 1) {
    throw new BaseError(status.BAD_REQUEST);
  } else {
    return flagResponseDTO(flag);
  }
}
