import axios from "axios";
// 设置 axios 信息
axios.defaults.baseURL = process.env.SERVER_URL;
axios.defaults.headers.Accept = "*/*";
axios.defaults.headers.clientType = 10;
