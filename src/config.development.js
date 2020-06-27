const API_PATH = process.env.API || 'http://[::1]:3001';

const stage = process.env.NODE_ENV || 'development';
const config = {
  api: {
    url: `${API_PATH}/api`,
    path: API_PATH,
  },
  stage,
  firebaseConfig: {
    apiKey: "AIzaSyCpTeqWXWWvq-9y8SNlL1v6HFd6P8iK88s",
    authDomain: "crwn-db-c001e.firebaseapp.com",
    databaseURL: "https://crwn-db-c001e.firebaseio.com",
    projectId: "crwn-db-c001e",
    storageBucket: "crwn-db-c001e.appspot.com",
    messagingSenderId: "1054201950783",
    appId: "1:1054201950783:web:618eccb95a8c99910abe8a",
    measurementId: "G-F0CZKTQ2VE"
  },
};

export default config;
