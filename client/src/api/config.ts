import _axios from "axios";

const axios = _axios.create({
  baseURL: "http://localhost:3000",
});

export default axios;
