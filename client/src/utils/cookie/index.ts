import { Cookies } from 'react-cookie';

interface ICookieOption {
  path: string;
}

const cookies = new Cookies();

export const cookie = {
  getItem: (name: string) => cookies.get(name),
  setItem: (name: string, value: string, option?: ICookieOption) =>
    cookies.set(name, value, { ...option }),
  removeItem: (name: string) => cookies.remove(name),
};
