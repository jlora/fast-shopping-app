import config from '../../config';


export default function apiCall(method, uri) {
  console.log(config.api.path + uri);
  return fetch(config.api.path + uri, {
    method
  }).then(response => response.json());
};