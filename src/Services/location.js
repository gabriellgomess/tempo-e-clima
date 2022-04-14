// https://api.hgbrasil.com/geoip?fields=only_results,city&key=50ac7b09&address=remote

import axios from "axios";



const location = axios.create({
  baseURL: "https://api.hgbrasil.com/geoip?format=json-cors&key=50ac7b09&address=remote&precision=false",
});

export default location;