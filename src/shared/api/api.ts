import axios from 'axios';

export const $api = axios.create({
  baseURL: __API__,
  headers: {
  },
});

export const $extApi = axios.create({
  baseURL: 'https://raw.githubusercontent.com/kirillstarkov/dnd-pack-ua/main/packs',
  headers: {
  },
});
