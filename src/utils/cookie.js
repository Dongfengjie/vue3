import Cookies from 'js-cookie';
import defaultSettings from '../defaultSettings';

export function getCookie(key) {
  const name = `${defaultSettings.projectPrefix}-${key}`;
  return Cookies.get(name);
}

export function setCookie(key, value, expires) {
  const name = `${defaultSettings.projectPrefix}-${key}`;
  if (expires) {
    return Cookies.set(name, value, { expires });
  }
  return Cookies.set(name, value);
}

export function removeCookie(key) {
  const name = `${defaultSettings.projectPrefix}-${key}`;
  return Cookies.remove(name);
}

// App
const sidebarStatusKey = 'sidebar_status';
export const getSidebarStatus = () => Cookies.get(sidebarStatusKey);
export const setSidebarStatus = (sidebarStatus) => Cookies.set(sidebarStatusKey, sidebarStatus);

const sizeKey = 'size';
export const getSize = () => Cookies.get(sizeKey);
export const setSize = (size) => Cookies.set(sizeKey, size);

// User
const tokenKey = 'vue_typescript_admin_userToken';
export const getToken = () => Cookies.get(tokenKey);
export const setToken = (token) => Cookies.set(tokenKey, token);
export const removeToken = () => Cookies.remove(tokenKey);
