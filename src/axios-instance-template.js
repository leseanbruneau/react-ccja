
// Copy axios-instance-template.js to axios-instance.js
//  In axios-instance.js - update baseURL with path to Firebase database

import axios from 'axios';

const instance = axios.create({
  baseURL: ''
});

export default instance;
