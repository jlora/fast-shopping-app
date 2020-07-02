import config from '../../config';


export const apiCall = (method, uri) => {
  return fetch(config.api.path + uri, {
    method
  }).then(response => response.json());
};

export const apiCallPost = (method, uri, body) => {
  console.log('BODY JSON', JSON.stringify(body));
  const requestOptions = {
      method: method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
  };
  return fetch(config.api.path + uri, requestOptions)
      .then(response => response.json());
};



export const apiCallTest = () => {
  return ({
    "order": {
      "id": 110
    },
    "customer": {
      "fullName": "JUAN PEREZ"
    }
  });
};