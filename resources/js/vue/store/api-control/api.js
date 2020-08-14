/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import Qs from 'qs';

const { token } = localStorage;
const url = process.env.MIX_CLIENT_API_DOMAINNAME;

// if no have token -> get token
const apiDefaultWithoutToken = axios.create({
  baseURL: url,
  headers: { Accept: 'application/json' },
});

const apiDefaultWithToken = axios.create({
  baseURL: url,
  headers: { 
    Accept: 'application/json',
    Authorization: `Bearer ${token}`,
    'content-type': 'application/x-www-form-urlencoded'
  },
});


// login Api
export const apiLogin = (data, method) => apiDefaultWithoutToken[method]('/api/backstage-login', data);

// logout Api
export const apiLogout = (method) => apiDefaultWithToken[method]('/api/backstage-logout');

// refresh token;
export const refreshToken = (context, response) => {
  if (response.headers.authorization) {
    const newBearerToken = response.headers.authorization;
    const newToken = newBearerToken.substring(6);
    context.commit('USERREFRESHTOKEN', newToken);
  }
};

// get aside Api
export const apiGetAside = () => apiDefaultWithToken['get']('/api/get-aside-menu');

// get articlelist Api
export const apiGetArticlelist = () => apiDefaultWithToken['get']('/api/articles-list')