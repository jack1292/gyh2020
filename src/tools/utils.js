/**
 * 获取Token
 */
export const getToken = () => {
  return window.localStorage.getItem('token');
}