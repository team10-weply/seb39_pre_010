export const user = {
  getUser: () => localStorage.getItem('user'),
  deleteUser: () => localStorage.removeItem('user'),
};
