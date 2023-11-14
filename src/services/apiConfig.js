import axios from "axios";
let apiUrl;
const apiUrls = {
  production: "https://restaurant-api1-0cadf6d31e8f.herokuapp.com/api/",
  development: "https://restaurant-api1-0cadf6d31e8f.herokuapp.com/api/",
};

if (window.location.hostname === "localhost") {
  apiUrl = apiUrls.development;
} else {
  apiUrl = apiUrls.production;
}

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
