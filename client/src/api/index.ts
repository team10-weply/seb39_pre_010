import axios, { AxiosRequestHeaders } from 'axios';
import { cookie } from 'utils/cookie';

export const client = axios.create({
  baseURL: 'http://ec2-52-79-234-12.ap-northeast-2.compute.amazonaws.com:8080',
});

export const headers: AxiosRequestHeaders = {
  Authorization: `Bearer ${cookie.getItem('accessToken')}`,
};
