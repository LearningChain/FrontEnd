import axios from 'axios';
const MockAdapter = require('axios-mock-adapter');

const mockAxios = new MockAdapter(axios);

export default mockAxios;
