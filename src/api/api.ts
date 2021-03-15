/* eslint-disable no-return-await */
import axios from 'axios';

const baseUrl = `https://6049d0d6fb5dcc001796a909.mockapi.io/`;

export const getArticles = async () => await axios.get(`${baseUrl}articles`);
