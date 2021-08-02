import axios from 'axios';
import _ from 'lodash';
import { store } from '../state/ROOT';

// Host
export const host = `https://omgvamp-hearthstone-v1.p.rapidapi.com/`;

// Key
const rapidApiKey = 'd22b0f1c7amsh8d31afd35440c5fp1ffff3jsn6ca1fce54675';
const rapidApiHost = 'omgvamp-hearthstone-v1.p.rapidapi.com';

// Base Url Prefix "/"
export const baseURL = `${host}/`;

// Instancegm
const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    'x-rapidapi-key': rapidApiKey,
    'x-rapidapi-host': rapidApiHost,
  },
});

//  Interceptor response
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    let msg = '';
    const { data = {}, status = 0 } = error?.response || {};
    if (data) {
      const { message = '' } = _.isEmpty(data?.data) ? data : data?.data;

      if (_.isString(message)) {
        msg = message;
      } else if (_.isObject(message)) {
        Object.values(message).map((m, i) => (msg = msg + (i > 0 ? '.' : '') + m));
      }
    }
    if (!msg) {
      msg = 'Something went wrong';
    }
    return Promise.reject({ msg, status, data });
  },
);
export default axiosInstance;
