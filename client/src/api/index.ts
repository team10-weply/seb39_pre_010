import axios, { AxiosRequestHeaders } from 'axios';
import { cookie } from 'utils/cookie';

export const client = axios.create({
  baseURL: '${{ secrets.EC2_Elastic_IP }}',
});

export const headers: AxiosRequestHeaders = {
  Authorization: `Bearer ${cookie.getItem('accessToken')}`,
};
