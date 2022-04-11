import axios from "axios";

const api = axios.create({
  baseURL: `https://api.hgbrasil.com/weather?format=json-cors&key=${process.env.REACT_APP_API_KEY}&city_name=`,
});

export default api;