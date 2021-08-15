import axios from "axios";

const instance = axios.create({
  baseUrl: `https://maps.googleapis.com/maps/api/place/autocomplete/json
  ?input=`,
});

export default instance;
