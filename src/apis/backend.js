import {
  getIdToken,
} from '~/apis/auth';
const axios = require('axios');
const path = require('path');

export const getRequestInstance = () => {
  return getIdToken().then(idToken => {
    return axios.create({
      baseURL: process.env.NODE_ENV === 'development' ? window.location.origin : process.env.REACT_APP_BACKEND_URL,
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
  });
};

export const _debugRequestWithToken = ({
  message,
}) => {
  return getIdToken().then(idToken => {
    return getRequestInstance().then(request => {
      return request({
        method: 'post',
        url: '/api/debug-with-token',
        data: {
          message,
        },
      }).then(resp => {
        return resp.data;
      }).catch(err => {
        console.error(err);
        return {};
      });
    });
  });
};

