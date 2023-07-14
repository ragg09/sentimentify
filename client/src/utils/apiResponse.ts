import type { AxiosResponse } from 'axios';

export const isRequestOk = (res: AxiosResponse): boolean => {
  return res.status === 200;
};

export const isBadRequest = (res: AxiosResponse): boolean => {
  return res.status === 400;
};
