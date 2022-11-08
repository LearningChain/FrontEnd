import axios from 'axios';
const MockAdapter = require('axios-mock-adapter');

const mockAxios = new MockAdapter(axios, {delayResponse: 1000});

export default mockAxios;
