import axios from "axios";
axios.defaults.baseURL = process.env.SERVER_URL;
axios.defaults.headers.Accept = "*/*";
axios.defaults.headers.clientType = 10;
