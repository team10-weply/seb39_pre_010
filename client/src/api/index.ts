import axios, { AxiosRequestHeaders } from 'axios';
import { cookie } from 'utils/cookie';

export const client = axios.create({
  baseURL: `${process.env.REACT_APP_SERVER_URL}`,
});

export const header: AxiosRequestHeaders = {
  Authorization: `Bearer ${cookie.getItem('accessToken')}`,
};
