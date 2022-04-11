import axios from "axios";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com/weather?format=json-cors&key=846261a6&city_name=",
});

export default api;